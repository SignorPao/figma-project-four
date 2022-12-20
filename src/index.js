import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";

// import browser router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Main from "./pages/Main";
import About from "./pages/About";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
