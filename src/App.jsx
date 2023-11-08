import { useState }  from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'
import Notes from './components/Notes'
import Users from './components/Users'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { getNotes } from './requests'
const App = () => {
  const [notes, setNotes] = useState([{content:'hello',important:'',id:''}])
  const padding = {
    padding: 5
  }
  const fetchNotesFromDB = async() => {
    const result = await getNotes()
    console.log('in fetchnotes',result)
    setNotes(result)
    console.log('in fetchnotes',typeof notes)
  }

  return (
    <Router>
      <div>
        <Link style={padding} to ='/'>home</Link>
        <Link style={padding} to ='/notes' onClick={fetchNotesFromDB}>notes</Link>
        <Link style={padding} to ='/users'>users</Link>
      </div>
      <Routes>
        <Route path = '/notes' element = {<Notes notes={notes}/>}/>
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
