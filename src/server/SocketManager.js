const io = require("./index.js").io;

let connectUser = {};
const { createUser } = require("../Factories");
let numUsers = 0;
let users = [];
module.exports = function(socket) {
  console.log("SocketId: " + socket.id);

  // socket.on(VERIFY_USER, (username, callback)=> {
  //     callback({user:createUser({name:username})})
  // });

  socket.on("add user", username => {
    // we store the username in the socket session for this client
    socket.username = username;
    users.push(socket.username);
    numUsers = users.length;
    // echo globally (all clients) that a person has connected

    socket.broadcast.emit("user joined", {
      users: users,
      numUsers: numUsers
    });
    socket.emit("login", {
      numUsers: numUsers
    });
  });

  setInterval(() => {
    socket.broadcast.emit("user joined", {
      users: users,
      numUsers: numUsers
    });
  }, 5000);

  socket.on("disconnect", () => {
    users = users.filter(item => item !== socket.username);
    --numUsers;
    socket.broadcast.emit("user joined", {
      users: users,
      numUsers: numUsers
    });
  });

  socket.on("startgame", (startgame, questions, usersArray) => {
    socket.broadcast.emit("gameStarts", startgame, questions, usersArray);
    console.log("hej!");
  });

  socket.on("next", (nextquestion) => {
    socket.broadcast.emit("next", nextquestion);
    console.log("next");
    console.log(nextquestion);
  })
};

// function addUser(userList, user){
//     let newList = Object.assign({}, userList)
//     newList[user.name] = user
//     return newlist;
// }
