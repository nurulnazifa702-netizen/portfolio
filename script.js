// =========================================================
// 1. MOBILE MENU TOGGLE (hamburger)
// =========================================================
function toggleMenu() {
  var nav = document.getElementById("navLinks");
  if (nav) {
    nav.classList.toggle("open");
  }
}

// Close the mobile menu when a link is clicked
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      var nav = document.getElementById("navLinks");
      if (nav) nav.classList.remove("open");
    });
  });
});

// =========================================================
// 2. CONTACT FORM VALIDATION (with inline feedback)
// =========================================================
function sendMessage(event) {
  event.preventDefault(); // stop page reload

  var name = document.getElementById("userName").value.trim();
  var email = document.getElementById("userEmail").value.trim();
  var message = document.getElementById("userMessage").value.trim();
  var feedback = document.getElementById("formFeedback");

  // basic email pattern check
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "" || email === "" || message === "") {
    feedback.textContent = "⚠️ Please fill in all fields.";
    feedback.className = "form-feedback error";
    return;
  }

  if (!emailPattern.test(email)) {
    feedback.textContent = "⚠️ Please enter a valid email address.";
    feedback.className = "form-feedback error";
    return;
  }

  feedback.textContent = "✅ Thank you " + name + "! Your message has been sent.";
  feedback.className = "form-feedback success";
  document.getElementById("contactForm").reset();
}

// =========================================================
// 3. BACK-TO-TOP BUTTON (show/hide + smooth scroll)
// =========================================================
var topBtn = document.getElementById("topBtn");

if (topBtn) {
  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// =========================================================
// 4. PROJECT FILTER (projects page only)
// =========================================================
document.addEventListener("DOMContentLoaded", function () {
  var filterButtons = document.querySelectorAll(".filter-btn");
  var projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      // remove active from all
      filterButtons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");

      var filter = btn.getAttribute("data-filter");

      projectCards.forEach(function (card) {
        var category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.classList.remove("hide");
        } else {
          card.classList.add("hide");
        }
      });
    });
  });
});

// =========================================================
// 5. TYPING EFFECT ON HERO NAME (home page only)
// =========================================================
document.addEventListener("DOMContentLoaded", function () {
  var typedElement = document.getElementById("typedName");
  if (!typedElement) return; // not on home page

  var fullText = "Nurul Nazifa";
  var index = 0;
  typedElement.textContent = "";

  function typeLetter() {
    if (index < fullText.length) {
      typedElement.textContent += fullText.charAt(index);
      index++;
      setTimeout(typeLetter, 120);
    }
  }
  typeLetter();
});

// =========================================================
// 6. DYNAMIC GREETING BASED ON TIME (home page only)
// =========================================================
document.addEventListener("DOMContentLoaded", function () {
  var greetingElement = document.getElementById("greeting");
  if (!greetingElement) return;

  var hour = new Date().getHours();
  var greeting = "";

  if (hour < 12) {
    greeting = "☀️ Good morning!";
  } else if (hour < 18) {
    greeting = "🌤️ Good afternoon!";
  } else {
    greeting = "🌙 Good evening!";
  }

  greetingElement.textContent = greeting;
});