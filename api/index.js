require('dotenv').config();
const express = require('express');
const cors = require('cors');
const productRoutes = require('../routes/productRoutes');
const errorHandler = require('../middlewares/errorHandler');

const app = express();

app.use(express.json());
// app.use(express.static('public'));
// API routes
app.use('/api', productRoutes);



// app.get('/', (req, res) => {
//     res.sendFile("index.html");
// })



app.use(errorHandler);

module.exports = app;

// app.listen(3000, () => {
//     console.log("Server running on port 3000")
// })