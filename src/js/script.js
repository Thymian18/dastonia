// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Hero glitch reveal (fires once on load) =====
(function(){
  var wordmark = document.getElementById('heroWordmark');
  if (wordmark) wordmark.classList.add('run');
})();

// ===== Mobile nav toggle =====
(function(){
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');
  if (!toggle || !menu) return;

  function close(){
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function(){
    var isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  menu.addEventListener('click', function(e){
    if (e.target.tagName === 'A') close();
  });

  window.addEventListener('resize', function(){
    if (window.innerWidth > 720) close();
  });
})();

// ===== Scroll-spy: highlight the active nav link based on visible section =====
(function(){
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('#navMenu a');
  if (!sections.length || !navLinks.length) return;

  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        var id = entry.target.getAttribute('id');
        navLinks.forEach(function(link){
          link.classList.toggle('active', link.getAttribute('href') === '/#' + id);
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(function(section){ observer.observe(section); });
})();
