const express = require('express');
const router = require("./routes/index");
const cors = require("cors");
const morgan = require("morgan");

const server = express();

server.use(cors());

server.use(express.json());

server.use(morgan("dev"));

server.use("/rickandmorty", router);

module.exports = server;