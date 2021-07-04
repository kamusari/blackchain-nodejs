class Block {
  constructor(timeStamp, lastHash, hash, data ){
    this.timeStamp = timeStamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  };

  toString(){
    return `
      Block = 
      TimeStamp = ${this.timeStamp}
      LastHash = ${this.lastHash.substring(0, 10)}
      Hash = ${this.hash.substring(0, 10)}
      Data = ${this.data}
    `;
  };

  static genesis(){
    return new this('Genesis time', '---------', '8as7d54c8df', []);
  };


}

module.exports = Block;