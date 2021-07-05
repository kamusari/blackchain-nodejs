const websocket = require('ws');
const P2P_PORT = process.env.P2P_PORT || 5001;
const peers = process.env.PEERS ? process.env.PEERS.slipt(',') : [];

class P2pSever {
  constructor(blockchain){
    this.blockchain = blockchain;
    this.socket = [];
  }

  listen(){
    const server = new websocket.Server({port: P2P_PORT});
  }
}

module.exports = P2pSever;