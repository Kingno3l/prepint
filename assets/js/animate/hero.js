document.addEventListener('DOMContentLoaded', () => {
  // Show the hero section after 1 second
  setTimeout(() => {
    document.querySelector('.hero').classList.add('visible');

    // Show the image after 1 second
    setTimeout(() => {
      document.querySelector('.hero img').classList.add('visible');
    }, 1000); // Delay of 1000ms (1 second) for the image
  }, 1000); // Delay of 1000ms (1 second) for the hero section
});