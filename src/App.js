import React from "react";
import SideBar from "./SideBar";
import Feed from "./Feed";
import Widgets from "./Widgets";

import "./App.css";

function App() {
  return (
    <div className="app">
      <SideBar />

      <Feed />

      <Widgets />
    </div>
  );
}

export default App;
