// var produceArr = ["Carrot", "Tomato", "Lettuce", "Apple", "Cucumber",
//     "Radish", "Artichoke", "Potato", "Pumpkin", "Pear", "Strawberry",
//     "Lemon", "Asparagus", "Orange", "Peach", "Coconut", "Cabbage",
//     "Broccoli", "Pepper", "Watermelon", "Grapefruit"];

var generateHarvestData = () => {
  var Http = new XMLHttpRequest();

  var url = "http://localhost:3001/blocks";
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = function () {
    if(Http.readyState === 4 && Http.status === 200) {
      var obj = JSON.parse(Http.responseText);
      var arrJSON = obj;
  		var arr = [];
      var produceArr = [];

      // Push elements to a separate array and get produce names
      for (var i = 0; i < arrJSON.length; i++)
      {
        if (arrJSON[i].garden == GARDEN_NAME) {
          arr.push(arrJSON[i]);
          if (!produceArr.includes(arrJSON[i].produce))
          {
            produceArr.push(arrJSON[i].produce);
          }
        }
      }

      // Initialize attribute arrays now that we know what produce exists
      var produceArrLength = produceArr.length;
      var quantityArr = new Array(produceArrLength).fill(0);
      var weightArr = new Array(produceArrLength).fill(0);

      // Parse objects and sum up attributes for each produce
      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; i < produceArr.length; i++) {
          if (arr[i].produce == produceArr[i]) {
            var index = produceArr.indexOf(arr[i].produce);
            quantityArr[index] += arr[i].quantity;
            weightArr[index] += arr[i].weight;
          }
        }
      }

      // Create the table
      var table = document.createElement('table');

      var header = table.createTHead();
      var headRow = header.insertRow(0);

      var headCell1 = headRow.insertCell(0);
      var headCell2 = headRow.insertCell(1);
      var headCell3 = headRow.insertCell(2);

      headCell1.innerHTML = "<b>Produce</b>";
      headCell2.innerHTML = "<b>Quantity</b>";
      headCell3.innerHTML = "<b>Weight</b>";

      for (var i = 0; i < produceArr.length; i++) {
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = produceArr[i].produce;
        cell2.innerHTML = quantityArr[i];
        cell3.innerHTML = weightArr[i];
      }
      document.getElementsByClassName("container")[0].appendChild(table);
    }
  };
}
var generateRecentTransactions = () => {

}

var generateBlockchainData = () => {

}
