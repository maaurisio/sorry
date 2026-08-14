document.addEventListener('DOMContentLoaded', function () {
  const hearts = document.querySelectorAll('.heart');

  hearts.forEach(function (heart, index) {
    const size = 18 + Math.floor(Math.random() * 20);
    heart.style.fontSize = size + 'px';
    heart.style.animationDuration = (10 + Math.random() * 6) + 's';
    heart.style.animationDelay = (Math.random() * 8) + 's';
    heart.style.left = (Math.random() * 96) + 'vw';
  });
});
