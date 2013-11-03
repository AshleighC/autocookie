var clickers = {
  "bigClicker": {
    start: function() {
      return setInterval(function() {
        $("#bigCookie").click();
      }, 1);
    }
  },
  "goldenClicker": {
    start: function() {
      return setInterval(function() {
        $("#goldenCookie").click();
      }, 500);
    }
  },
  "pledgeClicker": {
    start: function() {
      return setInterval(function() {
        $("div[onmouseover*='Elder%20Pledge']").click();
      }, 60000);
    }
  }
}

$(document).ready(function() {
  for (id in clickers) {
    chrome.storage.sync.get(id, function(result) {
      for (key in result) {
        if (result[key]) {
          clickers[key].interval = clickers[key].start();
        }
      }
    });
  }
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  for (key in message) {
    var clicker = clickers[key];
    if (message[key]) {
      clicker.interval = clicker.start();
    } else {
      clearInterval(clicker.interval);
    }
  }
});
