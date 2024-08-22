import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';


const Page1 = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, [])
return (
  <div>
      <h2>Page 1</h2>
      <Link to="/">go back</Link>
      {users.map((item) =>{
          return (
          <h1 key={item.id}>
              <Link to={`/user/${item.id}`}>{item.name}</Link>
              </h1>
          )
      })}
  </div>
)
}

export default Page1;