require('dotenv').config();
const express = require('express');
const notFoundHandler = require('./middlewares/notFoundHandler');
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.use('/products', require('./routes/products'));
app.get('/', (req, res) => {
  res.json({
    "success": true,
    "message": "Hello, world!"
  })
});

app.use(function (req, res) {
  res.status(404).json({
    message: "404 Not Found"
  }); 
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})