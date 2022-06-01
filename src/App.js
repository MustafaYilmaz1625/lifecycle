import React, { useState } from "react";

import Counter from "./cpmponents/Counter";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      {isVisible && <Counter />}
      <br />
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Counter</button>
    </div>
  );
}

export default App;
