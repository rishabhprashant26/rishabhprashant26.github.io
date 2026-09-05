const navToggle = document.getElementById('navToggle');
const sidebar = document.getElementById('sidebar');

navToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

document.querySelectorAll('.side-nav a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
});
