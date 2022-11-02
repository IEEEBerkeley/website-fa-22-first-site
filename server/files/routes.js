const express = require("express");
const  { 
    getData,
    postData
} = require('./controller')

const dbo = require("./conn");
const ObjectId = require("mongodb").ObjectId;

const foodRoutes = express.Router();

foodRoutes.route("/food")
    .get(getData)
    .post(postData)

module.exports = foodRoutes;
