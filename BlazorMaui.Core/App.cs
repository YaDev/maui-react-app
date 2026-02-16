using Microsoft.JSInterop;
using System;

namespace BlazorMaui.Core
{
    public class App : Application
    {
        private readonly WebViewContainer webViewContainer;
        public App(WebViewContainer container)
        {
            webViewContainer = container;
        }

        protected override Window CreateWindow(IActivationState? activationState)
        {
            return new Window(webViewContainer);
        }

        [JSInvokable]
        public static async Task<string> GetSystemInfo()
        {
            System.Text.StringBuilder sb = new System.Text.StringBuilder();

            if (System.Runtime.InteropServices.RuntimeInformation.IsOSPlatform(System.Runtime.InteropServices.OSPlatform.Linux))
            {
                sb.AppendLine($"OS: {System.Runtime.InteropServices.RuntimeInformation.OSDescription}");
                sb.AppendLine($"|| OS Version: {Environment.OSVersion.ToString()}");
                sb.AppendLine($"|| .Net Version: {Environment.Version.ToString()}");
                sb.AppendLine($"|| MachineName: {Environment.MachineName}");
            }
            else
            {
                sb.AppendLine($"Model: {DeviceInfo.Current.Model}");
                sb.AppendLine($"|| Manufacturer: {DeviceInfo.Current.Manufacturer}");
                sb.AppendLine($"|| Name: {DeviceInfo.Current.Name}");
                sb.AppendLine($"|| OS Version: {DeviceInfo.Current.VersionString}");
                sb.AppendLine($"|| Idiom: {DeviceInfo.Current.Idiom}");
                sb.AppendLine($"|| Platform: {DeviceInfo.Current.Platform}");
            }

            return await Task.FromResult(
                sb.ToString()
            );
        }


    }
}
