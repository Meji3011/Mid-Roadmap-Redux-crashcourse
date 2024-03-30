import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";


function Counter2() {

    const dispatch = useDispatch();

  return (
    <div>
      <h1>This is Counter2</h1>
      <button onClick={() => dispatch(increment())}>Increase by 1</button>
      <button onClick={() => dispatch(decrement())}>Decrease by 1</button>
    </div>
  );
}

export default Counter2;
