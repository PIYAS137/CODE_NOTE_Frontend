import React from 'react'
import OneNote from './OneNote'

const AllNotes = () => {

    const notes = [2,3,4,5,6,76,7,5,5,5,5,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
    

  return (
    <div className='grid grid-cols-4 gap-5 m-5 '>
        {
            notes.map((one,i)=><OneNote key={i}/>)
        }
    </div>
  )
}

export default AllNotes