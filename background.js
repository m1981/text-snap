chrome.contextMenus.create({
    id: "summarize",
    title: "Summarize",
    contexts: ["selection", "page"]
});


chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "summarize") {
        // send a message to the content script
        chrome.tabs.sendMessage(tab.id, { action: "getFullEmailContent" }, response => {
            console.log('hello'); // Log the entire response object to see its structure
            const emailContent = response.data;
            chrome.storage.sync.set({ "selectedText": emailContent }, () => {
                chrome.windows.create({
                    url: chrome.runtime.getURL('side-panel.html'),
                    type: 'popup',
                    width: 300,
                    height: 600
                });
            });
        });
    }
});
