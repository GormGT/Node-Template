require("dotenv").config();
const express = require('express');
const router = require("./routes/routes");
const mongoose = require("mongoose");

const server = express();

// middleware
server.use(express.urlencoded({ extended : true }))
server.use(express.static('public'));
server.use(express.json());

// view engine
server.set('view engine', 'ejs');

// DB connection
const dbUIRI = process.env.mongoURI;
mongoose.connect(dbUIRI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then ((result) => server.listen(80))
    .catch((err) => console.log(err));

// routes
server.use(router);

//404 page
server.use((req, res) => {
    res.status(404).render('404.ejs', { title: '404' });
})