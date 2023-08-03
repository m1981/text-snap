class BackgroundService {
    constructor(apiService, storageService) {
        this.apiService = apiService;
        this.storageService = storageService;
    }

    async invokeService(service, selectedText) {
        const processedText = await service.processText(selectedText);
        await this.storageService.saveData('processedText', processedText);
    }
}
