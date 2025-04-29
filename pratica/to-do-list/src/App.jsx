import { useState, useEffect } from 'react'
import Div from './components/Div'
import './App.css'

function App() {
  const [users, sets] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/banco')
    .then(resp => resp.json())
    .then(data => {
      sets(data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      {
        users.map((userObj) => (
            <Div key={userObj.id} name={userObj.name} />
        ))
      }
    </>
  )
}

export default App
