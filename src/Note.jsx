import { useState } from 'react'
import React from 'react'

export default function Note({notes , deleteNote}) {


  return (
    <div className="note">
        <div className="text">{notes.text}</div>
        <button onClick={()=>deleteNote(notes.id)}>X</button>
    </div>
  )
}
