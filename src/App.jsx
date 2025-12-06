import React from "react";
import Routes from "./Routes";
import { StorageProvider } from "./store/useStorage";

function App() {
  return (
    <StorageProvider>
      <Routes />
    </StorageProvider>
  );
}

export default App;
