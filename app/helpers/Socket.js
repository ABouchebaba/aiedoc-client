import React from "react";
import socketIOClient from "socket.io-client";
import { BACKEND_URL } from "react-native-dotenv";

export class Socket {
  static instance = false;
  socket = false;

  static getInstance() {
    if (Socket.instance === false) {
      Socket.instance = new Socket();
    }

    return this.instance;
  }

  init() {
    this.socket = socketIOClient(BACKEND_URL);
  }

  get() {
    return this.socket;
  }

  on(key, callback) {
    if (this.socket) {
      this.socket.on(key, callback);
    }
  }

  emit(message, data) {
    if (this.socket) {
      this.socket.emit(message, data);
    }
  }

  destory() {
    this.socket = false;
  }
}
