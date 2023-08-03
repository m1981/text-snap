class StorageService {
    constructor() {}

    saveData(key, data) {
        return new Promise((resolve, reject) => {
            chrome.storage.local.set({ [key]: data }, () => {
                if(chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve();
                }
            });
        })
    }

    retrieveData(key) {
        console.log('retrieve data')
        return new Promise((resolve, reject) => {
            chrome.storage.local.get([key], (result) => {
                if(chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(result[key]);
                }
            });
        })
    }
}
