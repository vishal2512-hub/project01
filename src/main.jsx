<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <App />
  </StrictMode>
);
=======
import ReactDOM from "react-dom/client";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
); 
>>>>>>> f40fda7 (Initial commit)
