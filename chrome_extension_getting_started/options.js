let page = document.getElementById('buttonDiv');
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
function constructOptions(kButtonColors) {
    for (let item of kButtonColors) {
        let button = document.createElement('button');
        button.style.backgroundColor = item; 
        button.addEventListener('click', function() {
            chrome.storage.sync.set({color: item}, function() {
                console.log('color is ' + item);
            })
        });
        page.appendChild(button);
    }
}
constructOptions(kButtonColors);


// console.log(chrome.windows.getAll({populate: true, windowTypes: ['normal']}, function(windows) {console.log(windows);}));
// chrome.windows.getAll({ populate: true, windowTypes: ['normal'] }, function (windows) { console.log(windows); });
// chrome.tabs.getCurrent(function(tab) { console.log(tab);});
// // chrome.tabs.getSelected(null, function(tab) {
// //     var tablink = tab.url;
// //     console.log(tablink);
// // });
// chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
//     console.log(tabs);
//     console.log(tabs.url);
// });
// chrome.history.search(null, function(results) { console.log(results);});


// chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
//     console.log(tabs[0].url);
// });
