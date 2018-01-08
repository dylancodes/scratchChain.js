const Block = require('./Block.js');

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    const currentDate = new Date();
    return new Block(0, this.date, "Genesis Block", "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addNewBlock(newBlock) {
    newBlock.prevHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.createHash();
    this.chain.push(newBlock);
  }
}
 module.exports = Blockchain;
