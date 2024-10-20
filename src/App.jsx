// src/App.js
import { useState } from "react";
import Timer from "./component/Timer";
import MainPage from "./component/MainPage.jsx";

const App = () => {
  const [showMainPage, setShowMainPage] = useState(false);

  return (
    <div className="App">
      <MainPage /> 
      
    </div>
  );
};

export default App;
