var learnMoreBtn = document.getElementById("learn-more-btn");

  // If the button exists on the page, make it work
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", function(event) {
      // This shows a popup message
      alert("Thanks for wanting to know more! I am a passionate web development student at UNIMAS. Scroll down to read my full bio.");
      
      // (The page will automatically scroll down to the About section right after the alert is closed)
    });
  }