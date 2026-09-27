# DarkTube

Open-Source Extension to Invert YouTube videos color and save your eyes 😊

## What it does

DarkTube inverts the color of the YouTube video player, which can be easier
on the eyes when watching in a dark room or when a video is unexpectedly
bright/overexposed. Toggle it on or off anytime from the extension's popup.

## Installation (unpacked, for development/testing)

1. Clone this repository:
   ```bash
   git clone https://github.com/Krishna-Noutiyal/DarkTube.git
   ```
2. Open Chrome (or any Chromium-based browser) and go to `chrome://extensions`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the cloned `DarkTube` folder.
5. Open any YouTube video — click the DarkTube icon in your toolbar to toggle
   the color inversion on or off.

## Project structure

```
DarkTube/
├── manifest.json       # Extension manifest (Manifest V3)
├── script/
│   └── core.js         # Content script: applies/removes the invert filter
├── popup/
│   ├── popup.html       # Popup UI with an on/off toggle
│   └── popup.js         # Popup logic: reads/writes stored state, messages the content script
├── assets/
│   ├── icons/           # Extension icons
│   └── fonts/           # Popup font
└── LICENSE
```

## How it works

- `script/core.js` runs on all `youtube.com` pages, watches for the `<video>`
  element to appear (YouTube loads it dynamically and swaps it out between
  videos without a full page reload), and applies a CSS `filter:
  invert(1) hue-rotate(180deg)` to it.
- The current on/off state is stored with `chrome.storage.sync`, so your
  preference persists across browser sessions and syncs across devices
  signed into the same Chrome profile.
- Toggling the switch in the popup sends a message to the content script on
  the active tab so the change applies immediately, without needing to
  reload the page.

## Changelog

**1.1.0**
- Broadened the match pattern from single video URLs to all of
  `youtube.com`, so the extension also works on Shorts and survives
  in-app navigation.
- Added a null check before touching the `<video>` element, preventing a
  crash when the script runs before the player has loaded.
- Added a `MutationObserver` and a `yt-navigate-finish` listener so the
  filter re-applies correctly when navigating between videos without a
  full page reload.
- Added a real on/off toggle in the popup, wired up via
  `chrome.storage.sync` and message passing to the content script.
- Added `storage` and `activeTab` permissions required for the above.

**1.0.0**
- Initial release: inverts the video player's colors unconditionally on
  matching pages.

## Contributing

Pull requests are welcome. Please open an issue first to discuss any large
changes.

## License

MIT — see [LICENSE](./LICENSE).
