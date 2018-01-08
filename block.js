const SHA256 = require('crypto-js/sha256');

class Block {
  /* index - (optional) where the block sits on the chain
   * timestamp - when the block was created
   * data - any type of data to associate with the block
   * prevHash - String that contains the hash for the previous block
   */
  constructor(index, timestamp, data, prevHash = ''){
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.hash = this.createHash(); // hash for current block
  }

  /*
   * Function to calculate the hash function for current block
   */
  createHash() {
    return SHA256(this.index + this.prevHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}

module.exports = Block;
