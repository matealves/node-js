const socket = io();

let username = "";
let userList = [];

const loginPage = document.querySelector("#login__page");
const chatPage = document.querySelector("#chat__page");

const loginInput = document.querySelector("#login__page-input");
const textInput = document.querySelector("#chat__page-text-input");

loginPage.style.display = "flex";
chatPage.style.display = "none";

function renderUserList() {
  const users = document.querySelector(".chat__page-users");
  users.innerHTML = "";

  userList.forEach((user) => {
    users.innerHTML += `<li><span class="ball">🟢</span><span class="username">${user} ${
      user.toLowerCase() === username.toLowerCase() ? "(você)" : ""
    }</span></li>`;
  });
}

function addMessage(type, user, message) {
  const isMe = username?.toLowerCase() === user?.toLowerCase();

  const messageElement = document.createElement("li");
  messageElement.innerHTML = `<li class="message__container ${
    isMe ? "me" : ""
  }"><div class="message"><span class="user ${
    isMe ? "me" : ""
  }">${user}</span><span>${message}</span></div></li>`;

  const statusElement = document.createElement("li");
  statusElement.innerHTML = `<li class="m-status">${message}</li>`;

  const chat = document.querySelector(".chat__page-list");
  switch (type) {
    case "status":
      chat.lastElementChild.before(statusElement);
      break;
    case "msg":
      chat.lastElementChild.before(messageElement);
      break;
  }

  chat.scrollTop = chat.scrollHeight;
}

loginInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    const name = loginInput.value.trim();

    if (name != "") {
      username = name;
      document.title = "Chat (" + username + ")";
      socket.emit("join-request", username);
    }
  }
});

textInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    const txt = textInput.value.trim();
    textInput.value = "";
    textInput.focus();

    if (txt != "") {
      addMessage("msg", username, txt);
      socket.emit("send-msg", txt);
    }
  }
});

socket.on("user-ok", (list) => {
  loginPage.style.display = "none";
  chatPage.style.display = "flex";
  textInput.focus();

  // addMessage("status", null, "Conetctado!");
  const chat = document.querySelector(".chat__page-list");
  chat.scrollTop = chat.scrollHeight;

  userList = list;
  console.log("list:", list);
  console.log("userList:", userList);
  renderUserList();
});

socket.on("list-update", (data) => {
  if (data.joined) {
    addMessage("status", null, `${data.joined} entrou.`);
  }

  if (data.left) {
    addMessage("status", null, `${data.left} saiu.`);
  }

  userList = data.list;
  renderUserList();
});

socket.on("show-msg", (data) => {
  addMessage("msg", data.username, data.message);
});

socket.on("disconnect", () => {
  userList = [];
  addMessage("status", null, "Você está sem conexão!");
});

socket.on("connect_error", () => {
  addMessage("status", null, "Tentando reconectar...");
});

socket.on("connect", () => {
  addMessage("status", null, "Conectado!");
  if (username != "") {
    socket.emit("join-rquest", username);

    const chat = document.querySelector(".chat__page-list");
    chat.scrollTop = chat.scrollHeight;
  }
});
