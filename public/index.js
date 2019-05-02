var data = fs.readFileSync('../resources/harvestJSONFile.json', 'utf8');
var harvestData = [];
harvestData = JSON.parse(JSON.stringify(data));

harvestData.forEach(function (obj, index) {
  console.log(obj);
});
