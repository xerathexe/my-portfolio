const body = document.body;
const floatingIcon = document.getElementById("floatingThemeIcon");

function toggleTheme() {
  body.classList.toggle("light");
  const isLight = body.classList.contains("light");
  floatingIcon.textContent = isLight ? "⏾" : "☀";
}

function sendMessage(event) {
  event.preventDefault();
  alert("Message sent! I will contact you soon.");
  event.target.reset();
}
function toggleMenu() {
  const nav = document.getElementById("mobileNav");
  const icon = document.getElementById("menuIcon");

  nav.classList.toggle("active");
  icon.textContent = nav.classList.contains("active") ? "✕" : "☰";
}

document.querySelectorAll("#mobileNav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("mobileNav").classList.remove("active");
    document.getElementById("menuIcon").textContent = "☰";
  });
});
