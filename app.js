import express from "express";
const app = express();

import { createServer } from "http";

import { Server } from "socket.io";
const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
    res.send("hey");
});

server.listen(3000);