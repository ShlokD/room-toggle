import { useEffect, useState, useContext } from "react";
import { SocketContext } from "./socket-context";

export default function Room() {
  const { socket } = useContext(SocketContext);
  const [room, setRoom] = useState();

  socket?.on("update-room", (index) => {
    setRoom(index);
  });

  return <h1>Currently in Room {room} </h1>;
}
