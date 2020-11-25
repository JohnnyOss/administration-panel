function toggleMenu() {
  document.querySelector('.sidebar-content').classList.toggle('show');
}

document.querySelector('.sidebar-menu').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});

