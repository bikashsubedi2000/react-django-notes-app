import React from 'react'
import NoteCard from './NoteCard'
import loader from './loader'

const NoteCardContainer = ({notes,loading}) => {
  return (
    <>
    <div className="container">
    <div className="note-has-grid row">

      {loading && <Loader loading={loading}/>}

      {notes.map(note=> <NoteCard key={note.id} note={note}/>
  )}


      
    </div>
    </div>
    </>
  )
}

export default NoteCardContainer