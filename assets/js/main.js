// Menu Header
const btnMenu = document.getElementById("menu"); 
const btnClose = document.getElementById("close");
const menu = document.getElementById("menu-header");

btnMenu.addEventListener("click", () => {
    menu.classList.add("active");
    btnMenu.style.display = "none";
    btnClose.style.display = "flex";
});

btnClose.addEventListener("click", () => {
    menu.classList.remove("active");
    btnMenu.style.display = "flex";
    btnClose.style.display = "none";
});

// Counter Hero
document.addEventListener('DOMContentLoaded', function() {
    let timeLeft = 2.5 * 60; // Convertir 2.5 minutos a segundos
    let timerInterval;
    const timerElement = document.getElementById('timer');

    timerElement.style.color = "var(--accent-color)";
    timerElement.style.fontFamily = "var(--primary-font)";
    timerElement.style.fontWeight = "var(--primary-semibold-weight)";

    function updateTimer() {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      const formattedTime = String(minutes).padStart(1, '0') + ":" + String(seconds).padStart(2, '0');
      document.getElementById('timer').textContent = formattedTime;

      timeLeft--;

      if (timeLeft < 0) {
        clearInterval(timerInterval);
        enableButtons();
        timerElement.style.display = "none";
      }
    }

    function enableButtons() {
      // Replace 'your-buttons' with the class or ID of your buttons
      const buttons = document.querySelectorAll('.btn:not(#header-button)'); // Or use a specific selector
      buttons.forEach(button => {
        button.style.display = 'inline-flex';
      });
    }


    timerInterval = setInterval(updateTimer, 1000); // Update every second

    // Initial update to display the correct time immediately
    updateTimer();
});

// Carousel Services
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const carouselServices = document.getElementById("carousel-services");

btnRight.addEventListener("click", () => {
    carouselServices.scrollLeft += 1000;
})
btnLeft.addEventListener("click", () => {
    carouselServices.scrollLeft -= 1000;
})

// Questions
const questionCards = document.querySelectorAll(".question__card");

questionCards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});