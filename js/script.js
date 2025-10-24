
const root = document.documentElement;
const btn = document.getElementById('themeToggle');
btn?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
});
// Persist theme
(function(){
  const saved = localStorage.getItem('theme');
  if(saved === 'light') document.body.classList.add('light');
})();
