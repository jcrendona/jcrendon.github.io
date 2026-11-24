// Mobile menu, footer year and project filters. No dependencies.
(function () {
  var button = document.querySelector('.menu-button');
  var links = document.querySelector('.nav-links');
  if (button && links) {
    button.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();

  var filters = document.querySelectorAll('.filter');
  var cards = document.querySelectorAll('.project-card[data-area]');
  filters.forEach(function (f) {
    f.addEventListener('click', function () {
      var area = f.getAttribute('data-filter');
      filters.forEach(function (o) { o.setAttribute('aria-pressed', String(o === f)); });
      cards.forEach(function (c) {
        var areas = c.getAttribute('data-area').split(' ');
        c.hidden = !(area === 'all' || areas.indexOf(area) !== -1);
      });
    });
  });
})();
