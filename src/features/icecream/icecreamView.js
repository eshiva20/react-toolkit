import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {ordered, reStocked} from "./icecreamSlice"

const IcecreamView = () => {
  const {numOfIcecreams}=useSelector((state)=>state.iceCream)
  const dispatch=useDispatch()
  return (
    <div>
      <h1>Number of iceCream - {numOfIcecreams}</h1>
      <button onClick={() => dispatch(ordered())}>Order iceCream</button>
      <button onClick={() => dispatch(reStocked(10))}>ReStock iceCream</button>
    </div>
  )
}

export default IcecreamView
