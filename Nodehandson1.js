const http = require("http");
const port = 4000;
const data=[
    {name:'Naveen',age:24},
    {name:'Nishant',age:20},
    {name:'Avinash',age:25},
    {name:'Aniket',age:23}
]
const jsonData = JSON.stringify(data);
const server = http.createServer((req, res) => {
  res.write(`<h1>This is my First Node_handson</h1>`);
  res.write(jsonData)
  res.end();
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
