class Block {
  constructor(timeStamp, lastHash, hash, data ){
    this.timeStamp = timeStamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  toString(){
    return `
      Block = 
      TimeStamp = ${this.timeStamp}
      LastHash = ${this.lastHash.subString(0, 10)}
      Hash = ${this.hash.subString(0, 10)}
      Data = ${this.data}
    `;
  }
}

module.exports = Block;