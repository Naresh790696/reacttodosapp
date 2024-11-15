import React from "react";
import ReactDom from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// Importing Components;
import App from "./App";
const root  = ReactDom.createRoot(document.getElementById('root'));


root.render(<>
<React.StrictMode>
  <App/>
</React.StrictMode>
</>)