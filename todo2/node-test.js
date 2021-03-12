let http = require("http")

let ourApp = http.createServer(function(req, res){
  console.log(req.url)
  res.and("Hello, and welcome!");
});
ourApp.listen(3000);
