const net = require("net");
const { IP, PORT } = require("./constants"); 
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({IP, PORT});

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    
    conn.write("Name: EFG");
    conn.write("Say: hi 😁");
  });

  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = connect;
