import express from "express";
const app = express();

import { createServer } from "http";
import path from "path";

import { Server } from "socket.io";
const server = createServer(app);
const io = new Server(server);

app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("hey");
});

server.listen(3000);