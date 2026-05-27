const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Successfully server created");
});

app.get("/", (req, res) => {
  res.send(`hello world`);
});
app.get("/adi", (req, res) => {
  res.send(`Panda baby `);
});

// app.get('/', (req,res) => {
//   res.send(
//    {
//     name : "Arya",
//     age : 20
//    } 
//   )
// })

// app.get('/', (req,res) => {
//   res.send(
//     ['Apple', 'Mango', 'Cherry']
//   )
// })

// app.get('/', (req,res) => {
//   res.send(
//     {name : "Arya", age : 20}
//   )
// })

app.get('/', (req,res) => {
  const users = [
      {id: 1, name : 'Arya'},
      {id: 2, name : 'Priya'}
  ]
  res.json(users)
})
