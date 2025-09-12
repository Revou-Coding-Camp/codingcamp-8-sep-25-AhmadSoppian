document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector("[data-collapse-toggle]");
  const targetId = toggleBtn.getAttribute("data-collapse-toggle");
  const target = document.getElementById(targetId);

  toggleBtn.addEventListener("click", () => {
    target.classList.toggle("hidden");
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // supaya tidak reload halaman

  // ambil value
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // ambil elemen error
  const errorName = document.getElementById("error-name");
  const errorEmail = document.getElementById("error-email");
  const errorMessage = document.getElementById("error-message");

  // flag validasi
  let isValid = true;

  // validasi name
  if (name === "") {
    errorName.classList.remove("hidden");
    isValid = false;
  } else {
    errorName.classList.add("hidden");
  }

  // validasi email (sederhana)
  if (email === "" || !email.includes("@")) {
    errorEmail.classList.remove("hidden");
    isValid = false;
  } else {
    errorEmail.classList.add("hidden");
  }

  // validasi message
  if (message === "") {
    errorMessage.classList.remove("hidden");
    isValid = false;
  } else {
    errorMessage.classList.add("hidden");
  }

  // jika lolos validasi
  if (isValid) {
    // tampilkan success
    document.getElementById("success-message").classList.remove("hidden");

    // isi hasil
    document.getElementById("result-name").innerText = name;
    document.getElementById("result-email").innerText = email;
    document.getElementById("result-message").innerText = message;

    // tampilkan result
    document.getElementById("result").classList.remove("hidden");

    // reset form
    document.getElementById("contactForm").reset();

    // sembunyikan kembali ketika timer sudah selesai
    setTimeout(function () {
      document.getElementById("success-message").classList.add("hidden");
      document.getElementById("result").classList.add("hidden");
    }, 5000);
  }
});
