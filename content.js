console.log('content script is running');


function getFullEmailContent() {
    let emailContent = "";
  
    // select all div elements which have class "adn ads"
    const emailElements = document.querySelectorAll('div.adn.ads');
  
    // Loop through each email element and append their text content to 'emailContent'
    emailElements.forEach((element) => {
        emailContent += element.textContent + "--------------<br><br>";
    });
  
    return emailContent;
}

// Listen for message from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('message received'); // Log when a message is received
    if (request.action === 'getFullEmailContent') {
        sendResponse({data: getFullEmailContent()});
        return true; // Important, as the response is asynchronous!
    }
});
