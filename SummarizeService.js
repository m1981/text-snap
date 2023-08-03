class SummarizeService {
    constructor(apiService, storageService) {
        this.apiService = apiService;
        this.storageService = storageService;
        console.log('ctor')

    }

    processText(selectedText) {
        console.log('proccess')
        const summarizedText = this.apiService.sendRequest(selectedText);
              console.log('proccess')

        this.storageService.saveData('summarizedText', summarizedText);
    }
}
