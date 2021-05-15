const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);
const port = 3000;
const seleciona = require('./select');
const insere_json = require('./insert_json');
const insere_xml = require('./insert_xml');
const mcache = require('memory-cache');

app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


var cache = (duration) => {
  return (req, res, next) => {
    let key = '__express__' + req.originalUrl || req.url;
    let cachedBody = mcache.get(key);
    if (cachedBody) {
      res.send(cachedBody);
      return
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        mcache.put(key, body, duration * 100000);
        res.sendResponse(body);
      }
      next();
    }
  }
}


app.get('/seleciona', cache(10), (req, res) => {
  seleciona(req.query.pesquisa).then((resultado) => {
    res.send(resultado);
  });
});


app.post('/insere_json', (req, res) => {
  insere_json(req.body.products).then((resultado) => {
    res.send(resultado);
  })
});

app.post('/insere_xml', bodyParser.xml(), (req, res) => {
  const products = req.body.products.element.map((product) => {
    product.id = Number(product.id);
    product.name = product.name[0]; 
    product.tags = product.tags[0].element.map((tag) => {return tag});
    return product;
  });

  insere_xml(products).then((resultado) => {
    res.send(resultado);
  });      
});

  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

