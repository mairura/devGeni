import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ReactPwa from "react-pwa-app";
// import { CookiesProvider } from "react-cookie";
import PWAPrompt from "react-ios-pwa-prompt";
import * as serviceWorker from "./registerServiceWorker";
import "./search.scss";
// import { WalletProvider } from "react-binance-wallet";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ReactPwa
        test //is to install in localhost, not required
        suspense={<></>}
        config={{
          swUrl: "/service-worker.js", // sw file in public default is service-worker.js
          onUpdate: (reg) => {
            alert("sw cache was updated");
            console.log(reg);
          },
          onSuccess: (reg) => {
            alert("sw success installed");
            console.log(reg);
          },
          onError: (reg) => {
            alert("sw error to install");
            console.log(reg);
          },
          onPrompt: (e) => {
            if (e.outcome === "accepted") {
              console.log("user click on install and accept");
            }
            if (e.outcome === "dismissed") {
              console.log("user click on install and refuse");
            }
          },
        }}
      >
        <ErrorBoundary>
          <App />
          <PWAPrompt
            promptOnVisit={2}
            timesToShow={300}
            copyClosePrompt="Close"
            permanentlyHideOnDismiss={false}
            delay={1000}
          />
        </ErrorBoundary>
      </ReactPwa>
    </React.StrictMode>
  </BrowserRouter>
);
serviceWorker.register();
