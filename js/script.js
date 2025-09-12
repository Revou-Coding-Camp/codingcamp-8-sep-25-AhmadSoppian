document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector("[data-collapse-toggle]");
  const targetId = toggleBtn.getAttribute("data-collapse-toggle");
  const target = document.getElementById(targetId);

  toggleBtn.addEventListener("click", () => {
    target.classList.toggle("hidden");
  });
});

const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const errorName = document.getElementById("error-name");
const errorEmail = document.getElementById("error-email");
const errorMessage = document.getElementById("error-message");
const successMsg = document.getElementById("success-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  // Validasi Nama
  if (nameInput.value.trim() === "") {
    errorName.classList.remove("hidden");
    valid = false;
  } else {
    errorName.classList.add("hidden");
  }

  // Validasi Email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    errorEmail.classList.remove("hidden");
    valid = false;
  } else {
    errorEmail.classList.add("hidden");
  }

  // Validasi Pesan
  if (messageInput.value.trim() === "") {
    errorMessage.classList.remove("hidden");
    valid = false;
  } else {
    errorMessage.classList.add("hidden");
  }

  // Jika valid, tampilkan pesan sukses
  if (valid) {
    successMsg.classList.remove("hidden");
    form.reset();
    setTimeout(() => successMsg.classList.add("hidden"), 4000); // otomatis hilang
  }
});
