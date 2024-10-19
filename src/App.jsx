// src/App.js
import React, { useState } from "react";
import MainPage from "./component/MainPage";

const App = () => {
  return (
    <div className="App">
      {/* {showMainPage ? (
        <MainPage />
      ) : (
        <Timer setShowMainPage={setShowMainPage} />
      )} */}
      <MainPage />
    </div>
  );
};

export default App;
