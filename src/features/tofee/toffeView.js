import React from 'react'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { reStocked ,ordered } from './tofeeSlice'

const ToffeView = () => {
  const [value,setValue]=useState(1)
  const {numOfTofees}=useSelector((state)=>state.tofee)
  const dispatch=useDispatch()
  return (
    <div>
      <h1>Number of tofee - {numOfTofees}</h1>
      <button onClick={() => dispatch(ordered())}>Order tofee</button>
      <input type="text" value={value} onChange={(e)=>setValue(Number(e.target.value))}/>
      <button onClick={() => dispatch(reStocked(value))}>ReStock tofee</button>
    </div>
  )
}

export default ToffeView
