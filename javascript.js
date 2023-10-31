// Resources:

// https://www.youtube.com/watch?v=DqfQ4DPnRqI
// Prettier

// https://www.youtube.com/watch?v=9HcxHDS2w1s
// Animated image carousel

// 10/31 I did some reading on Odin curriculum and menu types, logging a commit
// https://marvelapp.com/blog/hamburger-menu-alternatives-mobile-navigation/


const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    // Offset = check value of data-carousel-button. If next, return 1. else, return -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
