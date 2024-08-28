import React from 'react'
import Filter from '../components/Filter'
import NoteCardContainer from '../components/NoteCardContainer'

const HomePage = ({notes,isLoading,handleFilterText}) => {
  return (
    <>
    
    <Filter handleFilterText={handleFilterText}/>
    <NoteCardContainer notes={notes} loading={isLoading}/>
    
    </>
  )
}

export default HomePage