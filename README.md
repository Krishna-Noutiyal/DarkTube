# DarkTube

An open-source browser extension that inverts the colors of YouTube videos, reducing glare for comfortable viewing at night or in low-light environments.

## Features

- **Built-in toggle:** Adds a dark mode button directly to the YouTube video player for quick switching.
- **Easier on the eyes:** Softens the brightness of bright videos and reduces glare.
- **Lightweight:** Minimal impact on browser performance and video loading.
- **Privacy-first:** Runs entirely on your device, with no tracking, analytics, or data collection.
- **Open source:** Free to use, modify, and distribute.

## Installation

DarkTube is currently installed manually from source.

### Chromium browsers (Chrome, Brave, Edge)

1. Download this repository as a `.zip` and extract it, or clone it:
```bash
   git clone https://github.com/<your-username>/DarkTube.git
```
2. Open your browser's extensions page (`chrome://extensions/` or `edge://extensions/`).
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked**.
5. Select the `DarkTube` folder.

### Mozilla Firefox

1. Download or clone this repository.
2. Open `about:debugging#/runtime/this-firefox`.
3. Click **Load Temporary Add-on**.
4. Select the `manifest.json` file inside the `DarkTube` folder.

> **Note:** Firefox removes temporary add-ons when the browser is closed, so you will need to reload it each session.

## Usage

1. Open any video on YouTube.
2. Click the DarkTube button in the video player controls to toggle dark mode on or off.

## Privacy

DarkTube does not collect, store, or transmit any data. All processing happens locally in your browser.

## Contributing

Contributions are welcome. To get started:

1. Fork the repository.
2. Create a branch for your change (`git checkout -b feature/your-feature`).
3. Commit your changes and open a pull request.

For bugs or feature requests, please open an issue.

## License

This project is licensed under the [MIT License](LICENSE).
