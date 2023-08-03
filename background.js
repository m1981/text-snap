importScripts('APIService.js');
importScripts('StorageService.js');

importScripts('SummarizeService.js');
importScripts('RephraseService.js');
importScripts('EmailSummarizeService.js');
importScripts('BackgroundService.js');

let apiService = new APIService();
let storageService = new StorageService();

chrome.contextMenus.removeAll(function() {
    chrome.contextMenus.create({
        id: "summarize",
        title: "Summarize",
        contexts: ["selection", "page"]
    });

    chrome.contextMenus.create({
        id: "rephrase",
        title: "Rephrase",
        contexts: ["selection", "page"]
    });

    chrome.contextMenus.create({
        id: "email",
        title: "Email...",
        contexts: ["selection", "page"]
    });
});


chrome.contextMenus.onClicked.addListener((info, tab) => {
    let service;
    let selectedText = info.selectionText;
    switch(info.menuItemId) {
        case 'summarize':
            console.log('sum');
            service = new SummarizeService(apiService, storageService);
            break;
        case 'rephrase':
            service = new RephraseService(apiService, storageService);
            break;
        case 'email':
            service = new EmailSummarizeService(apiService, storageService);
            break;
        default:
            return;
    }

    const backgroundService = new BackgroundService(apiService, storageService);
    backgroundService.invokeService(service, selectedText); // pass selectedText to the invokeService

    chrome.windows.create({
        url: chrome.runtime.getURL('popup.html'), // change this to the HTML file you want to show
        type: 'popup',
        width: 300,
        height: 600
    });
});
