var cookieClickerUrl = "http://orteil.dashnet.org/cookieclicker/";

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.url.indexOf(cookieClickerUrl) == 0) {
    chrome.pageAction.show(tabId);
  }
});

