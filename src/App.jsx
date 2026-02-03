import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./app/routers/routes";
import AuthProvider from "./app/provider/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  );
}

export default App;
