let heart = document.getElementsByClassName("heart");
let heartbadge = document.getElementById("heart-badge");
let plus = document.getElementsByClassName("plus");
let plusbadge = document.getElementById("plus-badge");




let heartPlus = function () {
    heartbadge.innerHTML = Number(heartbadge.innerHTML) + 1;
};
for (var i = 0; i < heart.length; i++) {
   heart[i].addEventListener('click', heartPlus);
};
let cartPlus = function () {
   plusbadge.innerHTML = Number(plusbadge.innerHTML) + 1;
};
for (var i = 0; i < plus.length; i++) {
  plus[i].addEventListener('click', cartPlus);
};



const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#id_password');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});