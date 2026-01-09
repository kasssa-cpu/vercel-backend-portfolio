require('dotenv').config();
const express = require('express');
const productRoutes = require('../routes/productRoutes');
const errorHandler = require('../middlewares/errorHandler');


const app = express();

app.use(express.json());

// API routes
app.use('/api', productRoutes);


app.use(errorHandler);

module.exports = app;

// app.listen(3000, () => {
//     console.log("Server running on port 3000")
// })