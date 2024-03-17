import { Socket } from "socket.io";
import http from "http";

const { createServer } = require('node:http');
const { Server } = require('socket.io');

const server = createServer(http);
const io = new Server(server);

// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'index.html'));
// });

io.on('connection', (socket: Socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});