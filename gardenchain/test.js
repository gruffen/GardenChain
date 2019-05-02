var http = require("http")

var options = {
  host:"localhost",
  port: 3001,
  path:"/mineBlock",
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
}

var data = {
  "garden": "Garden 1",
  "produce": "Carrot",
  "quantity": 5,
  "weight": 7.6
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
