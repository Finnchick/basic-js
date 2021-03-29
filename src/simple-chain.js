const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    if (position <= 0 || typeof position !== 'number' ||
      position > this.chain.length - 1) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = this.chain.map((item) => `( ${item} )`);
    this.chain = [];
    return res.join('~~');
  }
};

module.exports = chainMaker;