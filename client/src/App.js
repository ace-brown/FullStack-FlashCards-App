import React from "react";

import Card from "./components/UI/Card";
import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import "./index.css";

const App = () => {
  return (
    <Card>
      <Navbar />
      <Posts />
      <Form />
    </Card>
  );
};

export default App;
