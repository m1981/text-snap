class SummarizeService {
    constructor(apiService, storageService) {
        this.apiService = apiService;
        this.storageService = storageService;
    }

    processText(selectedText) {
        const summarizedText = this.apiService.sendRequest(selectedText);
        this.storageService.saveData('summarizedText', summarizedText);
    }
}
