const express = require("express");

const server = express();

server.use(express.json());

const accountsRouter = require('./accounts/accounts-router');
server.use('/api/accounts', accountsRouter);

server.get('/', (req, res) => {
    res.json(`Server is running`);
});

module.exports = server;
