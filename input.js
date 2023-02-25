const connect = require("./client");
const stdin = process.stdin;

let connection;

const setupInput = function(conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  handleUserInput();
  return stdin;
};

const handleUserInput = function() {
  // your code here
  stdin.on("data", (data) => {
    // console.log("data clicked: ", data);
    if (data === "\u0003") {
      process.exit();
    }
    if (data === 'w') {
      stdin.write("Move: up\n");
    }
    if (data === 'a') {
      stdin.write("Move: left\n");
    }
    if (data === 's') {
      stdin.write("Move: down\n");
    }
    if (data === 'd') {
      stdin.write("Move: right\n");
    }
    return data;
  });
};
module.exports = setupInput;
