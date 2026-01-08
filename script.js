window.onload = function () {
  const nama = document.getElementById("nama");
  const status = document.getElementById("status");
  const btn = document.getElementById("btn");

  // fade in
  nama.classList.add("show");
  status.classList.add("show");
  btn.classList.add("show");

  btn.addEventListener("click", function () {
    status.innerHTML = "Saya sedang belajar menjadi programmer remote 🚀";
    status.style.color = "#22c55e";

    btn.innerHTML = "SUDAH JALAN";
    btn.disabled = true;
    btn.style.opacity = "0.6";
    btn.style.cursor = "not-allowed";
  });
};
