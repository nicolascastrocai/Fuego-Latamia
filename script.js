// Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  setTimeout(() => {
    ring.style.left = e.clientX + 'px';
    ring.style.top = e.clientY + 'px';
  }, 60);
});
document.querySelectorAll('a, button, .c-card, .video-screen').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '12px';
    cursor.style.height = '12px';
  });
});

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// VSL play
let videoLoaded = false;
function playVideo() {
  if (videoLoaded) return;
  videoLoaded = true;
  const screen = document.getElementById('vsl');
  screen.innerHTML = '<iframe src="https://www.youtube.com/embed/Vfkr3hhb_TM?autoplay=1" width="100%" height="100%" style="position:absolute;inset:0;border:none;" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
  screen.style.background = '#000';
  screen.style.cursor = 'default';
}

// Autoplay on scroll into view
const vslObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      playVideo();
      vslObs.disconnect();
    }
  });
}, { threshold: 0.5 });
vslObs.observe(document.getElementById('vsl'));