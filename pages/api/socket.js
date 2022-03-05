import { Server } from "socket.io";

export default function handler(req, res) {
  if (res.socket.server.io) {
    console.log("Server is Running...");
  } else {
    console.log("Initializing Socket...");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      socket.on("room-change", (msg) => {
        socket.broadcast.emit("update-room", msg);
      });
    });
  }

  res.end();
}
