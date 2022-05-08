const nama = document.querySelector("#nama");
const email = document.querySelector("#email");
const nomor = document.querySelector(".nomor");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm");
const button = document.querySelector(".submit");
const form = document.querySelector("form");
let dataInfo = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Registrasi Berhasil");

  const data = {
    nama: nama.value,
    email: email.value,
    nomor: nomor.value,
    password: password.value,
  };
  console.log(data);
  if (password.value === confirmPassword.value) {
    dataInfo.push(data);

    let abc = localStorage.getItem("data-user");

    if (localStorage.getItem("data-user") != null) {
      let user = [];
      user = JSON.parse(localStorage.getItem("data-user"));
      user.push(data);
      localStorage.setItem("data-user", JSON.stringify(user));
    } else {
      localStorage.setItem("data-user", JSON.stringify(dataInfo));
    }
  } else {
    alert("password berbeda");
  }

  window.location = "login.html";
});
