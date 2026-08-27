const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.querySelector(".nav-links");

if (mobileMenu && navLinks) {

  mobileMenu.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-open");

  });

}


document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(event) {

    const targetID = this.getAttribute("href");

    const target = document.querySelector(targetID);

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});
