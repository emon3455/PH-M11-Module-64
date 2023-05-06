/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [users , setUsers] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:5000/users`)
    .then(res=> res.json())
    .then(data=> setUsers(data))
    .catch(er=>{
      console.log(er.message);
    })
  },[])


  return (
    <>
     
      <h1>Users Managements system</h1>
      <p>Total users: {users.length}</p>
      <div className="">
        {
          users.map(user=> <p key={user.id}> {user.id} : {user.name} : {user.email} </p>)
        }
      </div>
    
    </>
  )
}

export default App
