"use strict";

const increment = require(`./lib/increment`);
const decrement = require(`./lib/decrement`);
const http = require(`http`);
const port = `8080`;
const operations = {increment, decrement};

const handler = (req, res) => {
    if (req.method !== `POST`) {
      console.error(`only POST methods!`)
      res.statusCode = 405;
      res.end();
      return;
    }
    const action = req.url.substring(1);
    console.log(`Requested action: ${action}`);
    let chunks = [];
    req.on(`error`, err => {
      console.error(err);
      res.statusCode = 400;
      res.end();
    }).on(`data`, chunk => {
      chunks.push(chunk);
    }).on(`end`, () => {
      const body = Buffer.concat(chunks).toString();
      try {
        const jsonBody = JSON.parse(body);
        const result = operations[action](jsonBody.num, jsonBody.by);
        res.end(`${result}`);
      } catch (error) {
        res.statusCode = 500;
        res.end();
      }
    });
};

const server = http.createServer(handler);

server.listen(port, err => {
  if (err) {
    console.error(err);
  }

    console.log(`server listening on port: ${port}`);
});