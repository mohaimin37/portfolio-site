document.getElementById("year").textContent = new Date().getFullYear();

const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navbar.classList.remove("open"));
});

// Contact form: no backend on this static site, so hand off to the visitor's
// email client with the message pre-filled.
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:mohaimin.dev1234@gmail.com?subject=${subject}&body=${body}`;

  note.textContent = "Opening your email client...";
  setTimeout(() => (note.textContent = ""), 4000);
});
