var express = require('express');
var router = express.Router();

router.get("/", function(request,response){
   response.render("index")
});

router.get("/contacto", function(request,response){
   response.render("contact")
});

router.get("/productos", function(request,response){
   response.render("productos")
});

router.get("/galeria", function(request,response){
   response.render("galeria")
});

router.get("/control-aviar", function(request,response){
   response.render("service1")
});

router.get("/exhibiciones", function(request,response){
   response.render("service2")
});

router.get("/publicidad", function(request,response){
   response.render("service3")
});

router.get("/rptamail", function(request,response){
   response.render("mail")
});

module.exports = router;
