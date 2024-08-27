import React from 'react'
import Filter from '../components/Filter'
import NoteCardContainer from '../components/NoteCardContainer'

const HomePage = ({notes,isLoading}) => {
  return (
    <>
    <Filter/>
    <NoteCardContainer notes={notes} loading={isLoading}/>
    
    </>
  )
}

export default HomePage