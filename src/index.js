const defaultComparator = (a, b) => {
  return a - b;
}

class Sorter {
  constructor() {
    this.store = [];
    this.comparator = defaultComparator;
  }

  add(element) {
    this.store.push(element)
  }

  at(index) {
    return this.store[index];
  }

  get length() {
    return this.store.length;
  }

  toArray() {
    return this.store.slice(0);
  }

  sort(indices) {
    
    const arrayToSort = this.store.filter((cur, idx) => { return indices.includes(idx); });

    const sortedArray = arrayToSort.sort(this.comparator);
    const sortedIndices = indices.sort();

    let i = 0;
    sortedIndices.forEach(index => {
      this.store[index] = sortedArray[i++];
    });
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;