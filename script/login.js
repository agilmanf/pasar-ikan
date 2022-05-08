const emailInput = document.querySelector(".email");
const password = document.querySelector(".password");
const form = document.querySelector("form");
const dataUser = !!localStorage.getItem("data-user")
  ? JSON.parse(localStorage.getItem("data-user"))
  : [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log(dataUser);

  let userLogin;
  let passwordLogin;
  let nama;

  dataUser.forEach((data) => {
    if (emailInput.value == data.email && password.value == data.password) {
      userLogin = true;
      passwordLogin = true;
      nama = data.nama;
    }
  });
  // console.log(data.email)
  // console.log(data.password)

  if (userLogin && passwordLogin) {
    alert("berhasil masuk");
    sessionStorage.setItem("isLogin", nama);
    window.location = "index.html";
  } else {
    alert("email atau password yang anda masukan salah");
  }
});
