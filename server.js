import dotenv from "dotenv";
dotenv.config();

//require("dotenv").config();

import express from "express";
import { createServer } from "http";
import path from "path";
const PORT = process.env.PORT;

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { Server } from "socket.io";
import cors from "cors";
import connect from "./database/connect.js";
import playerJoin from "./listeners/playerJoin.js";
import onServer from "./listeners/onServer.js";
import { addPlayer, list, listPlayers } from "./controllers/PlayerController.js";

//Connect to DB
connect();
//init
const app = express();
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST"]
    })
);

const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

app.use(express.static(path.join(__dirname, "public")));

//start
httpServer.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`);
});

const onConnection = (socket) => {
    playerJoin(io, socket);

    onServer(io, socket);
};

io.on("connection", onConnection);

//
//addPlayer({ name: "Phú", content: "alooo" });
list();