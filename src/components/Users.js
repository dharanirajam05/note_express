import React  from 'react'
import { useEffect, useState } from "react"
const Users = () => {
    const [user, setUser] = useState([])
   
//   const fetchData = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         setUser(data)
//       })
//   }
/* Using async await*/
const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()
  setUser(data)
      }

  
/*Passing a parameter while fetching data*/
// const id=1;
// const fetchData = () => {
//     fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         setUser(data[0].name)
//       })
//   }

  // useEffect(() => {
  //   fetchData()
  //   }, [])
// componentDidMount()
// {
//      fetchData();
          
//     }
  return (
    <div>
       
       <h1>List of Users using API</h1>
       <button onClick={fetchData}>Fetch Users</button>
       {user.length>0 && 
    (
  <ul>
    {user.map(userdata => (
      <li key={userdata.id}>{userdata.name}</li>
    ))}
  </ul>
)}


    </div>
  )
}

export default Users
