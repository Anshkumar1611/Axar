import React from 'react'

function Photo({url,title}) {
  return (
    <div className='w-full h-full '>
        <img src={url} alt='div' title={title} className='w-full h-full border-4 border-white'/>
    </div>
  )
}

export default Photo