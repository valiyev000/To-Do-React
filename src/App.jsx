import { useState } from 'react'
import './App.css'
import Note from './Note'

function App() {

  const [noteData , setNoteData] = useState([])

  const [inputChange , setInputChange] = useState("")

  function dataWriter() {
    
    if (inputChange) {
      setNoteData([{id:Math.random(), text:inputChange},...noteData])
    }

    setInputChange("")
  }

  function deleteNote(id) {
    setNoteData(noteData.filter((e)=> e.id !== id ))
  }




  return (
    <div className='mainContainer'>
      <div className="header">What's the plan for Today?</div>
      <div id="input-box">
        <input type="text" name="mainInput" id="mainInput" placeholder='Add a todo' onChange={(e)=> setInputChange(e.target.value)} value={inputChange}/>
        <button onClick={dataWriter}>Add Todo</button>
      </div>

      <div id="note-box">
        {noteData.map((e)=>{
          return <Note notes = {e} key={e.id} deleteNote={deleteNote} />
        })}
      </div>

    </div>
  )
}

export default App
