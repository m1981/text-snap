document.addEventListener('DOMContentLoaded', async () => {
    const storageService = new StorageService();
    const popup = new Popup(storageService);

    // Assume that there are HTML elements with ids "summary", "rephrase", and "email-summary" in your popup.html
    document.getElementById('summary').innerText = await popup.updateSummary();
    document.getElementById('rephrase').innerText = await popup.updateRephrased();
    document.getElementById('email-summary').innerText = await popup.updateEmailSummary();
});


class Popup {
    constructor(storageService) {
        this.storageService = storageService;
    }

    async updateSummary() {
        return await this.storageService.retrieveData('summarizedText');
    }

    async updateRephrased() {
        return await this.storageService.retrieveData('rephrasedText');
    }

    async updateEmailSummary() {
        return await this.storageService.retrieveData('emailSummary');
    }
}
