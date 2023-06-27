chrome.storage.sync.get("selectedText", (data) => {
  document.getElementById("summarized-text").innerText = data.selectedText;
  // Add your summarization logic here
});
