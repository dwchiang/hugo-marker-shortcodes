# Hugo Marker Shortcodes Extension

A VS Code extension to easily add Hugo marker shortcodes for underlining text in Markdown files.

## Features

This extension provides a context menu option to wrap selected text with Hugo marker shortcodes. It supports four colors: yellow, blue, red, and green.

## Usage

1. Select the text you want to underline in your Markdown file.
2. Right-click to open the context menu.
3. Choose the marker color you want:
   - Marker Yellow
   - Marker Blue
   - Marker Red
   - Marker Green

The extension will wrap the selected text with the corresponding Hugo shortcode, for example:
- `{{< marker yellow >}}Your selected text{{< /marker >}}`
- `{{< marker blue >}}Your selected text{{< /marker >}}`
- `{{< marker red >}}Your selected text{{< /marker >}}`
- `{{< marker green >}}Your selected text{{< /marker >}}`

## Installation

1. Install the extension from the VS Code Marketplace or manually from a VSIX file.

### From VS Code Marketplace

- Open VS Code
- Go to the Extensions view by clicking the square icon in the Activity Bar on the side of the window.
- Search for "Hugo Marker Shortcodes"
- Click Install

### From a VSIX file

- Download the `.vsix` file.
- Open VS Code
- Go to the Extensions view by clicking the square icon in the Activity Bar on the side of the window.
- Click on the three dots (More Actions) in the top-right corner.
- Select `Install from VSIX...`
- Select the downloaded `.vsix` file

## Development

### Prerequisites

- Node.js
- yarn
- vsce (Visual Studio Code Extension Manager)

### Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/dwchiang/hugo-marker-shortcodes.git
   cd hugo-marker-shortcodes
   ```

2. Install dependencies:
   ```sh
   yarn install
   ```

### Build and Package

1. Build the extension:
   ```sh
   yarn run compile
   ```

2. Package the extension:
   ```sh
   vsce package
   ```

This will create a `.vsix` file that you can install in VS Code.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License.
