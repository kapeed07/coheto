// onClick extension icon, send signam to toggle header
chrome.browserAction.onClicked.addListener(currentTab => {
  chrome.tabs.sendMessage(currentTab.id, '')
});