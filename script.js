const text = "Saya sedang belajar menjadi programmer remote 🚀";
let index = 0;

const statusText = document.getElementById("status");
const btn = document.getElementById("btn");

function typeEffect() {
  if (index < text.length) {
    statusText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50); // kecepatan mengetik
  }
}

window.onload = function () {
  document.querySelectorAll(".fade").forEach((el, i) => {
    setTimeout(() => el.classList.add("show"), i * 200);
  });

  typeEffect();
};

btn.addEventListener("click", () => {
  btn.innerHTML = "SUDAH JALAN";
  btn.disabled = true;
  btn.style.opacity = "0.6";
  btn.style.cursor = "not-allowed";
});
