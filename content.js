// Get the selected text
function getSelectedText() {
    return window.getSelection().toString();
}

// Listen for right-click context menu
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getSelectedText') {
        sendResponse(getSelectedText());
    }
});
