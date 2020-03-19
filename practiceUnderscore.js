const _ = {};
_.each = function(list, callback) {
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      callback(list[i], i, list);
    }
  } else {
    for (let key in list) {
      callback(list[key], key, list);
    }
  }
};
_.map = function(list, callback) {
  let result = [];
  if (Array.isArray(list)) {
    cb = (item, i, list) => {
      result.push(callback(item, i, list));
    };
    _.each(list, cb);
  } else {
    result = {};
    const cb = (item, key) => {
      result[key] = item;
    };
    _.each(list, cb);
  }
  return result;
};

_.filter = function(list, callback) {
  let storage = [];
  if (Array.isArray(list)) {
    const cb = (item, i, list) => {
      if (callback(item, i, list)) {
        storage.push(item);
      }
    };
    _.each(list, cb);
  } else {
    storage = {};
    const cb = (item, i, list) => {
      if (callback(item, i, list)) {
        storage.i = item;
      }
    };
    _.each(list, cb);
  }
  return storage;
};

_.from = function(pseudoArr) {
  return Array.prototype.slice.call(pseudoArr);
};

_.reduce = function(collection, callback, initialValue) {
  let memo = initialValue;
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      memo = callback(memo, collection[i]);
    }
  } else {
    const collectionKeys = Object.keys(collection);
    for (let i = 0; i < collectionKeys.length; i++) {
      memo = callback(memo, collection[collectionKeys[i]], collectionKeys[i]);
    }
  }
  return memo;
};

// const reduceSumCallback = (sum, n) => {
//   return sum + n;
// };
// const reduceKVSwitch = (result, value, key) => {
//   (result[value] || (result[value] = [])).push(key);
//   return result;
// };
// console.log(_.reduce({ a: 1, b: 2, c: 1 }, reduceKVSwitch, {}));
// console.log(_.reduce([1, 2, 3], reduceSumCallback, 0));
// const makeBroken = item => {
//   return `broken ${item}`;
// };
// const weapons = ["dagger", "salmon", "candlestick"];
// const brokenWeapons = _.map(weapons, makeBroken);

// const objWeapons = { 1: "dagger", 2: "salmon", 3: "candlestick" };
// const brokenObjWeapons = _.map(objWeapons, makeBroken);

// console.log();

// const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const filteredArr = _.filter(numArr, n => (n < 5 ? true : false));
// const mappedArr = _.map(numArr, item => item + 1);

// console.log(brokenObjWeapons, brokenWeapons, mappedArr, filteredArr);

module.exports = _;
