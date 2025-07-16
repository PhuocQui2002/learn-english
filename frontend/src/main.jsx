import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import App from "./App.jsx";
import "flowbite-react";
import "flowbite/dist/flowbite.css";
import "./index.css";
import "flowbite";
import "../src/style/override.css";
// ✅ tạo persistor từ store
const persistor = persistStore(store);

const root = document.getElementById("root");
document.documentElement.classList.add("dark");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </StrictMode>
  );
}
