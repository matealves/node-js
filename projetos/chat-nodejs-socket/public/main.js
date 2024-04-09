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
    users.innerHTML += `<li><span class="ball">🟢</span><span class="username">${user}</span>${
      user.toLowerCase() === "mateus" ? " (você)" : ""
    }</li>`;
  });
}

function addMessage(type, user, message) {
  const chat = document.querySelector(".chat__page-list");
  switch (type) {
    case "status":
      chat.innerHTML += `<li class="m-status">${message}</li>`;
      break;
    case "msg":
      chat.innerHTML += `<li class="message"><span class="user">${user}</span>${message}</li>`;
      break;
  }
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

socket.on("user-ok", (list) => {
  loginPage.style.display = "none";
  chatPage.style.display = "flex";
  textInput.focus();

  addMessage("status", null, "Conetctado!");

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
