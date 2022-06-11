import React from "react";
import Form from "./Form";

var isUserRegistered = true;

function App() {
  return (
    <div className="container">
      <Form userNotRegistered={isUserRegistered} />
    </div>
  );
}

export default App;
