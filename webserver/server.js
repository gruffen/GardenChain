var express = require("express");
var bodyParser = require('body-parser');
var jsrender = require('jsrender');
var path = require('path')
var fs = require('fs');
var request = require('request');
const CONFIG = require('../public/config.json');


var initHttpServer = () => {
  var app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, '../public'), {
    index: false
  }));

  // HOME PAGE
  app.get('/', (req, res) => {
    console.log("Retrieving index.html");

    request('http://localhost:3001/blocks', {json: true}, (err, res, body) => {
      if (err) { return console.log(err); }
      fs.writeFile('../resources/harvestJSONFile.json', JSON.stringify(body, null, 4), (err) => {
        if (err) {
          console.error(err);
          return;
        };
        console.log("Local data has been updated");
      });
    });

    res.sendFile(CONFIG.userFilePath + 'GardenChain/public/index.html');
  });

  // GARDEN ONE
  app.get('/harvestone', (req, res) => {
    console.log("Retrieving garden_one.html");

    res.sendFile(CONFIG.userFilePath + 'GardenChain/public/garden_one.html');
  });

  // GARDEN TWO
  app.get('/harvesttwo', (req, res) => {
    console.log("Retrieving garden_two.html");

    res.sendFile(CONFIG.userFilePath + 'GardenChain/public/garden_two.html');
  });

  // Start listening
  app.listen(CONFIG.port, () =>
        console.log(`Webserver listening on port ${CONFIG.port}!`));
};

var getDatabaseJSON = () => {
  let data = fs.readFileSync('harvestJSONFile.json');
  let harvestJSONFileData = JSON.parse(data);

  return harvestJSONFileData;
};

initHttpServer();
