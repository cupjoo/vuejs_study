import React, {useState} from "react";
import store from "../store";

const DisplayNumber = () => {
  const [number, setNumber] = useState(store.getState().number)
  store.subscribe(() => setNumber(store.getState().number))

  return (
    <div>
      <h1>Display Number</h1>
      <input type="text" value={number} readOnly></input>
    </div>
  );
};

export default DisplayNumber;
