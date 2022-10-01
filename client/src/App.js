import React from "react";

import Card from "./components/UI/Card";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import "./index.css";

const App = () => {
  return (
    <Card>
      <Navbar />
      <Body />
    </Card>
  );
};

export default App;
