document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      contactForm.reset();
    });
  });
  