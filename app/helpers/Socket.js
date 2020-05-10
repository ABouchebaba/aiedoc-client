import React from "react";
import socketIOClient from "socket.io-client";
import { BACKEND_URL } from "react-native-dotenv";

export class Socket {
  static instance = false;
  socket = false;

  static getInstance() {
    if (Socket.instance === false) {
      Socket.instance = new Socket();
      // console.log("new instance");
    }

    return this.instance;
  }

  isInitialized() {
    return Boolean(this.socket);
  }

  init() {
    console.log("Socket " + BACKEND_URL);
    this.socket = socketIOClient(BACKEND_URL, { reconnection: false });
  }

  get() {
    return this.socket;
  }

  on(key, callback) {
    if (this.socket) {
      this.socket.on(key, callback);
    } else {
      console.log("can't add event to socket");
      // console.log(this.socket);
    }
  }

  emit(message, data) {
    if (this.socket) {
      this.socket.emit(message, data);
    }
  }

  destroy() {
    if (this.socket) {
      // disconnect before
      this.socket.emit("disconnect");
      this.socket = false;
    }
  }
}
