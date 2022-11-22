import React from 'react'

function photo({url}) {
  return (
    <div className='w-full h-full '>
        <img src={url} alt='div' className='w-full h-full border-4 border-white'/>
    </div>
  )
}

export default photo