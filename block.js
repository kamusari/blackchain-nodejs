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
      LastHash = ${this.lastHash}
      Hash = ${this.hash}
      Data = ${this.data}
    `;
  }
}