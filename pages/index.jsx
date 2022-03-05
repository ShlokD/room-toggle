import Head from "next/head";
import React, { useContext } from "react";
import styles from "../styles/Home.module.css";
import { SocketContext } from "./socket-context";

export default function Home() {
  const arr = new Array(5).fill(0);
  const { socket } = useContext(SocketContext);

  const sendMessage = (index) => {
    socket?.emit("room-change", index);
  };

  socket?.on("update-room", (index) => {
    console.log("index", index);
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Room Toggle</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"
        />
      </Head>
      <div className="flex flex-column justify-center items-center">
        {arr.map((_, index) => (
          <button className="pa2 ma2 f2" onClick={() => sendMessage(index + 1)}>
            Room {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
