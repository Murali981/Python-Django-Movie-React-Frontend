import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./components/auth";
import { CookiesProvider } from "react-cookie";

// export const TokenContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/movies",
    element: <App />,
  },
]);

function Router() {
  const [token, setToken] = useState(null);

  return (
    // <TokenContext.Provider value={{ token, setToken }}>
    //   <RouterProvider router={router} />
    // </TokenContext.Provider>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
