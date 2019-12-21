import React from "react";
import "./App.css";
import Routes from "./routes/Routes";

import Header from "../src/components/Header/Header";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Routes />
    </div>
  );
};

export default App;
