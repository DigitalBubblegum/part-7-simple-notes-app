import { useState }  from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'
import Notes from './components/Notes'
import Users from './components/Users'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const App = () => {
  const padding = {
    padding: 5
  }

  return (
    <Router>
      <div>
        <Link style={padding} to ='/'>home</Link>
        <Link style={padding} to ='/notes'>notes</Link>
        <Link style={padding} to ='/users'>users</Link>
      </div>
      <Routes>
        <Route path = '/notes' element = {<Notes />}/>
        <Route path = '/users' element = {<Users />}/>
        <Route path = '/' element = {<Home />}/>
      </Routes>
      <div>
        <i>Note app, Computer Science 2023</i>
      </div>
    </Router>
  )
}

export default App
