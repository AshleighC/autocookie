var cookieClickerUrl = "http://orteil.dashnet.org/cookieclicker/";

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.url.indexOf(cookieClickerUrl) == 0) {
    chrome.pageAction.show(tabId);
  }
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (key in changes) {
    var message = {};
    message[key] = changes[key].newValue;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, message);
    });
  }
});
