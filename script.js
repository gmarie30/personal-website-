// Keep the footer current and handle a missing photograph gracefully.
document.getElementById('year').textContent = new Date().getFullYear();
const portrait = document.querySelector('.portrait img');
function showPortraitFallback() {
  portrait.hidden = true;
  portrait.style.display = 'none';
  document.querySelector('.portrait-fallback').hidden = false;
}
portrait.addEventListener('error', showPortraitFallback);
if (portrait.complete && portrait.naturalWidth === 0) showPortraitFallback();
