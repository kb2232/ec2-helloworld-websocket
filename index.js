const Websocket = require("ws");
const express = require('express');
const app = express();
const path = require("path");

app.use("/", express.static(path.resolve(__dirname, './client')))

const server = app.listen(9128);
const wsconnect = new Websocket.Server({
    noServer: true
});
server.on("upgrade", async function upgrade(request, socket, head) {
    const flag= false;
    if(flag) {
        return socket.end("HTTP/1.1 401 Unauthorized\r\n", "ascii")
    }

    wsconnect.handleUpgrade(request, socket, head, function done(ws) {
        wsconnect.emit("connection", ws, request, [request.headers['user-agent']]);
        //done(ws);
    });
});
let counter = 0;
wsconnect.on("connection", function connection(ws, d){
    console.log("======d===", d.headers['user-agent'])
    const user = d.headers['user-agent'];
    counter = counter + 1;
    wsconnect.clients.forEach((client) => {
        if(client.readyState===Websocket.OPEN) {
            client.send(JSON.stringify({counter, user}));
        }
    })
});
