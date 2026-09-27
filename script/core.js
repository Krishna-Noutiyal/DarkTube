function invert_video() {

    let yt_control = document.querySelector(".ytp-right-controls-left")
    
    // Storeing Original Content of the Media controls
    // let yt_control_data = yt_control.children;

    // Getting Images from the Extension Suite
    let light_img = chrome.runtime.getURL("assets/icons/light.svg")
    let dark_img = chrome.runtime.getURL("assets/icons/dark.svg")

    // Creating an Image tag & formating it accordingly
    const icon = document.createElement("img") 
    icon.style.width = "24px"
    icon.style.height = "24px"
    icon.style.filter = "invert(1)"
    icon.src = dark_img

    // Creating a yt Button & adding the Image within
    const button = document.createElement("button")
    button.className = "ytp-button"
    button.style.textAlign = "center"
    button.append(icon)

    // Adding New Media Controls
    yt_control.insertBefore(button,yt_control.childNodes[0])

    // Adding New 
    
    video = document.querySelector("video")

    video.style.filter = "invert(1) hue-rotate(180deg)";
}

invert_video()
