var http = require("http")

var options = {
  host:"192.168.50.239",
  port: 3001,
  path:"/mineBlock",
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
}

var data = {
  "garden": "Garden 2",
  "produce": "Apple",
  "quantity": 4,
  "weight": 1.7,
  "transType": "IN"
}

var jsonStr = JSON.stringify(data);

var req = http.request(options, (res) => {
  res.on('jsonStr', (d) => {
    process.stdout.write(d)
  })
})


console.log(jsonStr);

req.write(jsonStr);
req.end();
