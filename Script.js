const lightFavicon = document.querySelector('link[rel="icon"][href="favicon-light.png"]');
const darkFavicon = document.querySelector('link[rel="icon"][href="favicon-dark.png"]');

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (e.matches) {
    lightFavicon.disabled = true;
    darkFavicon.disabled = false;
  } else {
    lightFavicon.disabled = false;
    darkFavicon.disabled = true;
  }
});
  
function detectDarkMode() {

    const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    toggleFavicon(darkMode);
  }

  window.addEventListener('load', detectDarkMode);

  let docTitle = document.title;
  window.addEventListener('blur',() => {
      document.title = "Ayo pesan tiketmu disini";
  })
  window.addEventListener('focus',() => {
      document.title = docTitle;
  })
    