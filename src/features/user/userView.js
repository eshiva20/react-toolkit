import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchUsers } from './userSlice'

const UserView = () => {
  const dispatch=useDispatch()
  const {user}=useSelector((state)=>state)

  useEffect(()=>{
    dispatch(fetchUsers())
  },[])

  return (
    <div>
      <h1>List of Users</h1>
      {user.loading && <h2>Loading .....</h2>}
      {!user.loading && user.error ? <div> Erorr : {user.error.message}</div>:null}
      {!user.loading && !user.error ? 
      <ul>
        {user.data.map((elem)=>{
          return (
            <p>{elem.name}</p>
          )
          
        })}
      </ul>
      :null}

    </div>
  )
}

export default UserView
