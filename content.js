console.log('content script is running');


// Listen for message from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('message received'); // Log when a message is received

});
