const mySum = (...args) => {
  return args.reduce((total, curr) => total + curr, 0);
};

module.exports = {
  mySum,
};
