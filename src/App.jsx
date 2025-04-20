import React from "react";
import Form from "./components/form";
import { useState } from "react";

function App() {
  const [isSubmitted, setIssubmitted] = useState(true);

  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
