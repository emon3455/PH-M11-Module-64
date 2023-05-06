/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'
import { json } from 'react-router-dom';

function App() {

  const [users , setUsers] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:5000/users`)
    .then(res=> res.json())
    .then(data=> setUsers(data))
    .catch(er=>{
      console.log(er.message);
    })
  },[]);

  const handleSubmit = (e)=>{

    e.preventDefault();
    const form = e.target;
    const name  = form.name.value;
    const email = form.email.value;
    const user={name ,email}


    fetch(`http://localhost:5000/users`,{
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res=> res.json())
    .then(data=> {
      const newUsers = [...users, data];
      setUsers(newUsers);

      form.reset();
    })
    .catch(er=>{
      console.log(er.message);
    })

  }


  return (
    <>
     
      <h1>Users Managements system</h1>
      <p className='mb-1 '>Total users: {users.length}</p>
      <form onSubmit={handleSubmit} className='p-1 bg-sky-light mb-1'>
        <br />
        <input type='text' name='name' id="name" required></input> 
        <br />
        <input type='email' name='email' id="email" required></input> 
        <br />
        <input type="submit" value="Submit" /> 
      </form>
      <div className="">
        {
          users.map(user=> <p key={user.id}> {user.id} : {user.name} : {user.email} </p>)
        }
      </div>
    
    </>
  )
}

export default App
