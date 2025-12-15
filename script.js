// SMOOTH SCROLL
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ACTIVE NAV LINK
const sections = document.querySelectorAll('section');
const navList = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    const height = section.clientHeight;
    if (scrollY >= top && scrollY < top + height) {
      current = section.getAttribute('id');
    }
  });
  navList.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
});

const style = document.createElement('style');
style.innerHTML = `.nav-links a.active{color:#ff4081;border-bottom:2px solid #ff4081;padding-bottom:2px}`;
document.head.appendChild(style);

// FADE IN ON SCROLL
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(sec => {
  sec.classList.add('hidden');
  observer.observe(sec);
});

const fade = document.createElement('style');
fade.innerHTML = `.hidden{opacity:0;transform:translateY(40px);transition:1s}.show{opacity:1;transform:translateY(0)}`;
document.head.appendChild(fade);

// BUTTON POP
const buttons = document.querySelectorAll('.btn, button');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => btn.style.transform = 'scale(1)', 150);
  });
});

// CONTACT CARD POP
const cards = document.querySelectorAll('.contact-card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.style.transform = 'scale(0.95)';
    setTimeout(() => card.style.transform = 'scale(1)', 150);
  });
});


