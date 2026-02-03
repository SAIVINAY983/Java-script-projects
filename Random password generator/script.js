let btnEl = document.querySelector(".btn");
let inputEl = document.querySelector(".input");

btnEl.addEventListener("click", function () {
  createPassword();
});

function createPassword() {
  let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = 14;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars[randomNumber];
  }

  inputEl.value = password;
}