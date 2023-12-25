class User {
  constructor(email, password, dob) {
    this.email = email;
    this.password = hashCode(password);
    this.dob = dob;
  }
}

// Global Users List
let usersList = [];

function login() {
  var popup = document.getElementById("login");
  popup.classList.toggle("show");
}

function hashCode(string) {
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    var code = string.charCodeAt(i);
    hash = (hash << 5) - hash + code;
    hash = hash & hash; // Convert to 32bit
  }
  return hash;
}

const togglePassword = document.querySelector("#eye");
const password = document.querySelector("#passwd");
var popup = document.getElementById("myPopup");

togglePassword.addEventListener("click", () => {
  const type = password.getAttribute("type");
  if (type === "password") {
    password.setAttribute("type", "text");
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
    popup.innerText = "Hide Password";
  } else {
    password.setAttribute("type", "password");
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
    popup.innerText = "Show Password";
  }
});

togglePassword.addEventListener("mouseover", () => {
  popup.classList.toggle("show");
});

document.querySelector(".signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  let email = document.getElementById("Email").value;
  let password = document.getElementById("passwd").value;
  let dob = document.getElementById("dob").value;
  usersList.push(new User(email, password, dob));
});


document.querySelector(".google").addEventListener("submit", (googleUser) => {
  var profile = googleUser.getBasicProfile();
  let email = profile.getEmail();
  let password = Math.random().toString(36).slice(-8);
  let dob;
  try {
    dob = profile.getBirthday();
  } catch (error) {
    dob = new Date("23-11-2004");
  }
  usersList.push(new User(email, password, dob));
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  console.log(slides.length);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  slides[slideIndex].style.display = "block";
  slideIndex++;
  setTimeout(showSlides, 4000); 
}
