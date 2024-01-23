import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/bootstrap.min.css";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/widget.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
