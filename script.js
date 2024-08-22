// Select the scrollable container and navigation buttons
const scrollContainer = document.querySelector(".middle");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

// Add an event listener for mouse wheel scrolling
scrollContainer.addEventListener("wheel", event => {
  event.preventDefault(); // Prevent the default scroll behavior
  scrollContainer.scrollLeft += event.deltaY; // Scroll horizontally based on the vertical scroll amount
});

// Add an event listener for the left button click
leftBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth"; // Enable smooth scrolling behavior
  scrollContainer.scrollLeft -= 400; // Scroll left by 400 pixels
});

// Add an event listener for the right button click
rightBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth"; // Enable smooth scrolling behavior
  scrollContainer.scrollLeft += 400; // Scroll right by 400 pixels
});
