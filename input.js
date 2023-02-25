const stdin = process.stdin;

const setupInput = function() {
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  handleUserInput();
  return stdin;
};

const handleUserInput = function() {
  // your code here
  stdin.on("data", (data) => {
    console.log("data clicked: ", data);
    if (data === "\u0003") {
      process.exit();
    } else {
      return data;
    }
  });
};
module.exports = setupInput;
