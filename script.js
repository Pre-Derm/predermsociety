const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-open");
});


document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("mobile-open");
  });
});


document.querySelectorAll(".opportunity-card").forEach(card => {
  card.addEventListener("click", function(event) {

    const target = this.getAttribute("href");

    if (target.startsWith("#")) {
      const section = document.querySelector(target);

      if (section) {
        event.preventDefault();

        section.scrollIntoView({
          behavior: "smooth"
        });
      }
    }

  });
});
