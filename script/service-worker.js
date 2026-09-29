browser.tabs.onUpdated.addListener((tabId,changeInfo,tabdetails) => {
    
    if (changeInfo.url
        && changeInfo.url.includes("youtube.com/watch")
    ) {
        console.log("Sending NEWVIDEO message to core.js ...")
        
        chrome.tabs.sendMessage(tabId, "NEWVIDEO", (response) => {
            if (chrome.runtime.lastError) {
                console.log("Could not reach core.js - it might not be loaded yet.");
            } else {
                console.log("Message successfully delivered!");
            }
        });
    }
})