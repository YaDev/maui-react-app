import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
/*
    Wait for the webview to load Blazor Framework and start it if needed
*/
if(window.hasOwnProperty("DotNet")) {
    try {
        await new Promise(r => setTimeout(r, 100));
        window.DotNet.invokeMethod("", "");
    }
    catch(error: any) {
        if(error.message.includes("No call dispatcher")){
            window.Blazor.start();
        }
    }
}

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  