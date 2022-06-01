import React, { useState, useEffect } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Mustafa");

  useEffect(() => {
    console.log("Component mount edildi");
  }, []);
  useEffect(() => {
    console.log("number state güncellendi!");
  }, [number]);
  useEffect(() => {
    console.log("name state güncellendi!");
  }, [name]);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      <hr />

      <h1>{name}</h1>
      <button onClick={() => setName("yilmaz")}>Click</button>
    </div>
  );
}

export default Counter;
