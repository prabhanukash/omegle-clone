"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const { createServer } = require('node:http');
const { Server } = require('socket.io');
const server = createServer(http_1.default);
const io = new Server(server);
// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'index.html'));
// });
io.on('connection', (socket) => {
    console.log('a user connected');
});
server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
