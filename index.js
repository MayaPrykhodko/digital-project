const animatedTitles = document.querySelectorAll('.animated');

function checkAnimation() {
  animatedTitles.forEach(title => {
    const titlePosition = title.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (titlePosition < windowHeight) {
      title.classList.add('visible');
    }
    else {
      title.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', checkAnimation);