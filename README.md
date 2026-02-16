
![Alt text](screenshot.jpg?raw=true "Screenshot")

# .NET MAUI React Hybrid and Cross-Platform App

This project is designed to help you quickly build a hybrid app for Windows, Linux, macOS, Android, and iOS using .NET MAUI and React. It leverages Blazor framework JS interop to link .NET code in C# with JavaScript/TypeScript in React. Best of all, you can build this project without needing to install Microsoft Visual Studio on your Windows, Mac or Linux machine.

## Features

- **Cross-Platform:** Develop for Windows, Linux, macOS, Android, and iOS from a single codebase.
- **Blazor JS Interop:** Seamlessly integrate .NET C# code with JavaScript/TypeScript using Blazor framework's JavaScript Interop.
- **Hybrid App:** Combines the power of .NET MAUI with the flexibility of Javascript frameworks.
- **Web App development:** Develop, debug, and test your app's UI as a web app in the browser.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [.NET 10 SDK](https://dotnet.microsoft.com/download)
- [.NET MAUI](https://github.com/dotnet/docs-maui/blob/main/docs/get-started/installation.md)
- [XCode (Mac Only)](https://xcodereleases.com/)
- GTK+ gtk+-3.0(libgtk-3-0) and webkit2gtk-4 (libwebkit2gtk-4.0) (**Linux Only**)
- [Android SDK (For Android Build)](https://developer.android.com/)
- [Node.js and npm](https://nodejs.org/)
- [VSCode](https://code.visualstudio.com/)
- [VSCode C# extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)
- [VSCode .NET Meteor extension](https://marketplace.visualstudio.com/items?itemName=nromanov.dotnet-meteor)

Optional:
- [VSCode Android WebView Debugging extension](https://marketplace.visualstudio.com/items?itemName=mpotthoff.vscode-android-webview-debug)
- [VSCode .NET MAUI extension (an alternative for .NET Meteor)](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.dotnet-maui)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YaDev/maui-react-app.git
   cd maui-react-app
   ```
2. Install JavaScript dependencies:

   ```bash
   cd BlazorMaui.UI
   npm install
   ```
3. Install .NET dependencies:

   ```bash
   cd BlazorMaui.Core
   dotnet restore
   ```

## Usage

### Building the Project

**Build the project using VSCode .NET Meteor, .NET MAUI extensions** or build it manually, using the following commands:

- **Windows:**

  ```bash
  cd BlazorMaui.Core
  dotnet build -f net10.0-windows10.0.19041.0
  dotnet build -t:Run -f net10.0-windows10.0.19041.0
  ```
- **Linux:**

  ```bash
  cd BlazorMaui.Core
  dotnet build -f net10.0
  dotnet build -t:Run -f net10.0
  ```
- **macOS:**

  ```bash
  cd BlazorMaui.Core
  dotnet build -f net10.0-maccatalyst
  dotnet build -t:Run -f net10.0-maccatalyst
  ```
- **Android:**

  ```bash
  cd BlazorMaui.Core
  dotnet build -t:Run -f net10.0-android
  ```
- **iOS:**

  ```bash
  cd BlazorMaui.Core
  dotnet build -t:Run -f net10.0-ios
  ```

## Related projects
- [Photino](https://www.tryphotino.io/)
- [Avalonia](https://avaloniaui.net/)
- [Uno](https://platform.uno/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
