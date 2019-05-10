chrome.tabs.onActivated.addListener(function(tab) {
  chrome.tabs.query({ active: true, currentWindow: true, url: "https://arivohelp.freshdesk.com/a/tickets/filters/*"}, function(tab) {
    if (tab[0]) {
      chrome.tabs.reload(tab[0].id);
    }
  });
});