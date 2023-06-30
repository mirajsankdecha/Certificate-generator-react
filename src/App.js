import React from "react";
import CG from "./Components/CG";

const App = () => {
  return (
    <div className="app">
      <CG />
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", marginTop: "190px" }}
      >
        © 2023 Copyright:
        <span className="text-reset fw-bold">
          &nbsp;Developed at Imbuesoft LLP by Miraj Sankdecha
        </span>
      </div>
    </div>
  );
};

export default App;
