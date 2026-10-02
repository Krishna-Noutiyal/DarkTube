function addButton() {

    if (document.querySelector("#darkYtButton")) return

    let yt_control = document.querySelector(".ytp-right-controls-left")
    
    // Storeing Original Content of the Media controls
    // let yt_control_data = yt_control.children;

    // Getting Images from the Extension Suite
    let dark_img = browser.runtime.getURL("assets/icons/dark.svg")

    // Creating an Image tag & formating it accordingly
    const icon = document.createElement("img")
    icon.style.width = "24px"
    icon.style.height = "24px"
    icon.style.filter = "invert(1)"
    icon.id = "darkYtButtonIcon"
    icon.src = dark_img

    // Creating a yt Button & adding the Image within
    const button = document.createElement("button")
    button.className = "ytp-button"
    button.id = "darkYtButton"
    button.style.textAlign = "center"
    button.onclick = invert
    button.append(icon)

    // Adding New Media Controls
    yt_control.insertBefore(button, yt_control.childNodes[0])
    
}

function invert() {
    // Getting Images from the Extension Suite

    let light_img = browser.runtime.getURL("assets/icons/light.svg")
    let dark_img = browser.runtime.getURL("assets/icons/dark.svg")

    // Getting our icon 
    let icon = document.querySelector("#darkYtButtonIcon")
    if (icon.src === dark_img) {
        icon.src = light_img
        set_video_mode("dark")
    } else {
        icon.src = dark_img
        set_video_mode("light")
    }



}

function set_video_mode(mode) {
    
    // Getting the <video> tag
    video = document.querySelector("video")
    if (mode === "dark") {
        video.style.filter = "invert(1) hue-rotate(180deg)";
        
    } else {
        video.style.filter = ""
    }
}


// The Watchdog Logic
const observer = new MutationObserver((mutations) => {
    // Check if YouTube has rendered the controls AND our button is missing
    console.log("Inside Watchdog")
    if (document.querySelector(".ytp-right-controls-left") && !document.querySelector("#darkYtButton")) {
        console.log("Double Inside Watchdog")
        addButton();
        observer.disconnect()
    }
});
// Start watching the entire webpage for elements being added or removed
observer.observe(document.body, { childList: true, subtree: true });

// addButton()
// invert_video()
