import { useState }  from 'react'
import Home from './components/Home'
import Notes from './components/Notes'
import Users from './components/Users'
import { Routes, Route, Link, Navigate, useMatch } from "react-router-dom";
import { getNotes } from './requests'
import Login from './components/Login';
import Note from './components/Note';
import Notification from './components/Notification';
import { Navbar,Nav } from 'react-bootstrap';

const App = () => {
  const [notes, setNotes] = useState([{content:'hello',important:'',id:null}])
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)
   const login = (user) => {
    setUser(user)
    setMessage(`welcome ${user}`)
    setTimeout(() => {
      setMessage(null)
    }, 10000)
  }
  const padding = {
    padding: 5
  }
  const fetchNotesFromDB = async() => {
    const result = await getNotes()
    console.log('in fetchnotes',result)
    setNotes(result)
    console.log('in fetchnotes',typeof notes)
  }

  const match = useMatch('/notes/:id')
  const note = match 
    ? notes.find(note => note.id === Number(match.params.id))
    : null

  return (
    <div className="container">
      <Notification message={message}/>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#" as="span">
        <Link style={padding} to="/">home</Link>
      </Nav.Link>
      <Nav.Link href="#" as="span">
        <Link style={padding} to="/notes" onClick={fetchNotesFromDB}>notes</Link>
      </Nav.Link>
      <Nav.Link href="#" as="span">
        <Link style={padding} to="/users">users</Link>
      </Nav.Link>
      <Nav.Link href="#" as="span">
        {user
          ? <em style={padding}>{user} logged in</em>
          : <Link style={padding} to="/login">login</Link>
        }
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      <Routes>
       <Route path="/notes/:id" element={<Note note={note} />} />
        <Route path = '/notes' element = {<Notes notes={notes}/>}/>
        <Route path="/users" element={user ? <Users /> : <Navigate replace to="/login" />} />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path = '/' element = {<Home />}/>
      </Routes>
      <div>
        <i>Note app, Computer Science 2023</i>
      </div>
    </div>
  )
}

export default App
