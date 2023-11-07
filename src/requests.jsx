import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'


export const getNotes = async () => {
    const response = await axios.get(baseUrl)
    console.log('here',response.data)
    return response.data
}
  
  
export const createNote = newNote =>
  axios.post(baseUrl, newNote).then(res => res.data)

export const updateNote = updatedNote =>
  axios.put(`${baseUrl}/${updatedNote.id}`, updatedNote).then(res => res.data)