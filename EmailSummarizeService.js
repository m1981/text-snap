class EmailSummarizeService {
    constructor(apiService, storageService) {
        this.apiService = apiService;
        this.storageService = storageService;
    }

    processText(selectedText) {
        const summarizedText = this.apiService.sendRequest(selectedText);
        this.storageService.saveData('emailSummary', summarizedText);
    }

    getEmailThread() {
        // logic to grab email thread
    }
}
