import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, reStocked } from "./cakeSlice";

const CakeView = () => {
  const { numOfCakes } = useSelector((state) => state.cake);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of Cakes - {numOfCakes}</h1>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(reStocked(5))}>ReStock Cake</button>
    </div>
  );
};

export default CakeView;
