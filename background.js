importScripts('APIService.js');
importScripts('StorageService.js');

importScripts('SummarizeService.js');
importScripts('RephraseService.js');
importScripts('EmailSummarizeService.js');
importScripts('BackgroundService.js');

let apiService = new APIService();
const storageService = new StorageService();

console.log("asdasd");

chrome.contextMenus.onClicked.addListener((info, tab) => {
    let service;
    let selectedText = info.selectionText;
    switch(info.menuItemId) {
        case 'summarize':
            service = new SummarizeService(apiService, storageService);
            break;
        case 'rephrase':
            service = new RephraseService(apiService, storageService);
            break;
        case 'summarize-email':
            service = new EmailSummarizeService(apiService, storageService);
            break;
        default:
            return;
    }

    const backgroundService = new BackgroundService(apiService, storageService);
    backgroundService.invokeService(service, selectedText);
});


chrome.runtime.onInstalled.addListener(() => {
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
    const selectedText = info.selectionText;

    chrome.storage.sync.set({ "selectedText": selectedText }, () => {
        let pageToOpen = 'summary.html'; // default action
        
        switch (info.menuItemId) {
            case 'rephrase':
                pageToOpen = 'rephrase.html';
                break;
            case 'emailSummarize':
                pageToOpen = 'email.html';
                break;
            default:
                break;
        }
        

    });
});
