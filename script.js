/*
  EDIT GUIDE:
  This file only handles the mobile menu button (opens/closes the sidebar
  on small screens). You don't need to touch this unless you're changing
  how the mobile navigation behaves.
*/

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
