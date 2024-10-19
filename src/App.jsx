// src/App.js
import { useState } from "react";
import Timer from "./component/Timer";
import MainPage from "./component/MainPage";

const App = () => {
  const [showMainPage, setShowMainPage] = useState(false);

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
