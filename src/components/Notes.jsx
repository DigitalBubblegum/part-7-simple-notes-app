import { Link } from "react-router-dom"

const Notes = ({notes}) =>{
  console.log('in notes',notes)
  console.log(notes.map(note=>note))
  return(
  <div>
    <h2>Notes</h2>
    <ul>
      {notes.map((note) => (
          <li key={note.id}>
            <Link to={`/notes/${note.id}`}>{note.content}</Link>
          </li>
        ))}
    </ul>
  </div>
)
}

export default Notes