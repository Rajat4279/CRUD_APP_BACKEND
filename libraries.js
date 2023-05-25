//importing required libraries
const express = require('express');
const app = express();
const cors = require("cors");
const ejs = require('ejs');

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.set("view-engine", "ejs");
app.use(express.static("public"));

module.exports = {app};