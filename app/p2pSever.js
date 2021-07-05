const websocket = require('ws');
const P2P_PORT = process.env.P2P_PORT || 5001;
const peers = process.env.PEERS ? process.env.PEERS.split (',') : [];

class P2pSever {
  constructor(blockchain){
    this.blockchain = blockchain;
    this.socket = [];
  }

  listen(){
    const server = new websocket.Server({port: P2P_PORT});
    server.on('connection', socket => this.connectSocket(socket));
    
    this.connectToPeers();

    console.log(`Listening for peer-to-peer connections on: ${P2P_PORT}`);
  }

  connectToPeers(){
    peers.forEach(peer => {
      const socket = new websocket(peer);
      socket.on('open', () => {this.connectSocket(socket)})
    });
  }

  connectSocket(socket){
    this.socket.push(socket);
    console.log('socket connected');
  }

}

module.exports = P2pSever;