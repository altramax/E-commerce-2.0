import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { Provider } from "react-redux";
import { persistor, store } from "../src/Redux/ConfigStore";
import { PersistGate } from "redux-persist/integration/react";

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("/ServiceWorker.ts")
//     .then((registration) => {
//       console.log("Service Worker registered with scope:", registration.scope);
//     })
//     .catch((error) => {
//       console.error("Error registering Service Worker:", error);
//     });
// }

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  
);
