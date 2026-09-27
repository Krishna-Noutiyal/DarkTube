// Reflects and updates the stored DarkTube enabled/disabled state,
// and tells the active tab's content script to apply the change
// immediately, without requiring a page reload.

const toggleSwitch = document.getElementById("toggleSwitch");
const toggleLabel = document.getElementById("toggleLabel");

function setLabel(enabled) {
    toggleLabel.textContent = enabled ? "Enabled" : "Disabled";
}

// Load the current stored state when the popup opens.
chrome.storage.sync.get({ darkTubeEnabled: true }, (result) => {
    toggleSwitch.checked = result.darkTubeEnabled;
    setLabel(result.darkTubeEnabled);
});

toggleSwitch.addEventListener("change", () => {
    const enabled = toggleSwitch.checked;
    setLabel(enabled);

    chrome.storage.sync.set({ darkTubeEnabled: enabled });

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        if (!activeTab) return;

        chrome.tabs.sendMessage(
            activeTab.id,
            { type: "DARKTUBE_TOGGLE", enabled },
            () => {
                // Swallow "receiving end does not exist" errors -- this
                // happens harmlessly if the active tab isn't YouTube.
                if (chrome.runtime.lastError) {
                    // no-op
                }
            }
        );
    });
});
