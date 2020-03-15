// if key is not found, set hidden to false
if (!localStorage.getItem('is_header_hidden')) {
  localStorage.setItem('is_header_hidden', 'false');
}

// returns current status of header
getHiddenStatus = () => {
  return localStorage.getItem('is_header_hidden') === 'true';
}

// checks and toggle header
init = () => {
  let header = document.getElementById('main-header');
  header.style.display = getHiddenStatus() ? 'none' : 'block';
}

// initial call
init();

// onClick extension icon, store the value and call init fn()
chrome.runtime.onMessage.addListener((request, response, sendResponse) => {
  localStorage.setItem('is_header_hidden', !getHiddenStatus());
  init();
});