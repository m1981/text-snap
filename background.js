chrome.contextMenus.create({
    id: "summarize",
    title: "Summarize",
    contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "summarize") {
        const selectedText = info.selectionText;
        chrome.storage.sync.set({ "selectedText": selectedText }, () => {
            chrome.windows.create({
                url: chrome.runtime.getURL('side-panel.html'),
                type: 'popup',
                width: 300,
                height: 600
            });
        });
    }
});
