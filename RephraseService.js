class RephraseService {
    constructor(apiService, storageService) {
        this.apiService = apiService;
        this.storageService = storageService;
    }

    processText(selectedText) {
        const rephrasedText = this.apiService.sendRequest(selectedText);
        this.storageService.saveData('rephrasedText', rephrasedText);
    }
}
