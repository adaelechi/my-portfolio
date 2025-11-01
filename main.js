
function setupTypingEffect() {
  const textElement = document.querySelector('.hero-text');
  const textElementAfter = document.querySelector('.hero-text::after');
  const blinkCursor = document.querySelector('.blink');
  const words = ["Front-End Developer", "Web Developer", "Freelancer", "UI/UX Enthusiast"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      // Remove a character
      textElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Add a character
      textElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    // Determine typing speed
    let typeSpeed = 200;
    if (isDeleting) typeSpeed /= 2; // Faster when deleting

    // Switch to next word or toggle delete
    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typeSpeed = 1000; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; // Loop back to first word
    }

    setTimeout(type, typeSpeed);
  }

  // Start the typing effect
  type();
}

document.addEventListener('DOMContentLoaded', setupTypingEffect);


const hamburger = document.querySelector('.hamburger');
const menuBar = document.querySelector('.navbar__menu');
const hamBars = document.querySelectorAll('.bar');

function toggleMenu() {
  if (menuBar.classList.contains('close-menu')) {
    menuBar.classList.add('open-menu');
    menuBar.classList.remove('close-menu');
    hamburger.classList.add('close-bar');
    
  }
  else {
    menuBar.classList.add('close-menu');
    menuBar.classList.remove('open-menu');
    hamburger.classList.remove('close-bar');
    
  }
}

hamburger.addEventListener('click', toggleMenu);


// function exitHover() {
//   const projectCardsImg = document.querySelectorAll('.sect3_cards-content');
//   const projectCardsImgHover = document.querySelectorAll('.sect3_cards-content:hover');

//   projectCardsImgHover.forEach(element => {
//     element.addEventListener('mouseenter', function() {
//       element.style.transform = 'scale(1.05)';
//       element.style.transition = 'all ease 1s';
//     });
//   });

// }

// exitHover();

topButton = document.querySelector('#top-button');

window.onscroll = function() {scrollToTop()};

function scrollToTop() {
  if (document.body && document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topButton.style.display = "flex";
  } else {
    topButton.style.display = "none";
  }
};

topButton.addEventListener('click', ()=> {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});