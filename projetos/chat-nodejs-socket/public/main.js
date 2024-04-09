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
    users.innerHTML += `<li>${user} ${
      user.toLowerCase() === "mateus" ? "(você)" : ""
    }</li>`;
  });
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

  userList = list;
  console.log("list:", list);
  console.log("userList:", userList);
  renderUserList();
});
