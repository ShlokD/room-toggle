import "../styles/globals.css";
import { SocketContext } from "./socket-context";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [socket, setSocket] = useState();
  const socketInitializer = async () => {
    await fetch("/api/socket");
    const s = io();

    s.on("connect", () => {
      console.log("connected");
    });

    setSocket(s);
  };

  useEffect(() => {
    socketInitializer();
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      <Component {...pageProps} />
    </SocketContext.Provider>
  );
}

export default MyApp;
