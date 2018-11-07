'use strict';

chrome.runtime.onInstalled.addListener(function() {

    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log("The color is green.");
    });
    chrome.windows.getAll({ populate: true, windowTypes: ['normal'] }, function(windows) { console.log(windows); });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});


// let windowId = chrome.windows.WINDOW_ID_CURRENT;   // this gets you windowId 
tabs = {};
chrome.tabs.query({currentWindow: true}, function(tabs) {
    tabs.forEach (tab) => {
      tabs[tab.id] = {url: tab.url, title: tab.title};
    }
});
console.log(tabs);