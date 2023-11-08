const Notes = ({notes}) =>{
  console.log('in notes',notes)
  return(
  <div>
    <h2>Notes</h2>
    <ul>
      {notes.map(note =>{
        console.log(note.content)
        {<li> {note.content} </li>}
      })}
    </ul>
  </div>
)
}

export default Notes