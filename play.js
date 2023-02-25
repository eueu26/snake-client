const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.0.24", // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("To Client: ", data);

    conn.on("timeout", () => {
    console.log("you ded cuz you idled");
    });
  });
  return conn;
};

console.log("Connecting ...");
connect();
