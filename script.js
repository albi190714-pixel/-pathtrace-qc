const btn = document.getElementById('toggleHistory');
const history = document.getElementById('history');
btn.addEventListener('click', () => {
  const open = !history.classList.contains('collapsed');
  history.classList.toggle('collapsed');
  btn.setAttribute('aria-expanded', String(!open));
  btn.innerHTML = `${open ? 'Ver historial completo' : 'Ocultar historial'} <span>${open ? '⌄' : '⌃'}</span>`;
});
