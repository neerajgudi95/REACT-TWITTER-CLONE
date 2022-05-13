import React from "react";
import "./App.css";
import { Feed } from "./Components/Feed";
import Sidebar from "./Components/Sidebar";
import Widget from "./Components/Widget";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widget />
    </div>
  );
}

export default App;
