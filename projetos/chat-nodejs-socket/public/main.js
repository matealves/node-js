const socket = io();

let username = "";
const userList = [];

const loginPage = document.querySelector("#login__page");
const chatPage = document.querySelector("#chat__page");

const loginInput = document.querySelector("#login__page-input");
const textInput = document.querySelector("#chat__page-text-input");

loginPage.style.display = "flex";
chatPage.style.display = "none";

loginInput.addEventListener("keyup", (e) => {
  if (e.keyCode === "13") {
    const name = loginInput.value.trim();

    if (name != "") {
      username = name;
      document.title = 'Chat ('+username+')'
    }
  }
});
