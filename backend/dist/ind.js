"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let usercount = 0;
let allsockets = [];
wss.on("connection", function (socket) {
    allsockets.push(socket);
    socket.send(usercount);
    socket.on("message", (message) => {
        // wss.clients.forEach(function action(client){
        allsockets.forEach((s) => {
            s.send(message.toString() + "user count in chat:" + allsockets.length);
        });
    });
    socket.on("disconnect", () => {
        allsockets = allsockets.filter((x) => x != socket);
    });
});
