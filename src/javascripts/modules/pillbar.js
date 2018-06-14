var pillbar = document.getElementById('pillbar')
var lastKnownScrollY = 0
var ticking = false

var togglePillbar = function(scroll_pos) {
   if (scroll_pos > 480) {
    pillbar.className = 'pillbar pillbar-fixed'
  } else {
    pillbar.className = 'pillbar'
  }
}

window.addEventListener('scroll', function(e) {
  lastKnownScrollY = window.scrollY
  if (!ticking) {
    window.requestAnimationFrame(function() {
      togglePillbar(lastKnownScrollY)
      ticking = false
    });
    ticking = true
  }
});
