 class BackgroundService {
    constructor(apiService, storageService) {
        this.apiService = apiService;
        this.storageService = storageService;
    }

    invokeService(service, selectedText) {
        //const selectedText = Content.captureSelectedText();
        return service.processText(selectedText);
    }
}
