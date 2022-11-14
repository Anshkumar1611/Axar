import React from 'react'
import Images from '../../../assets/img'

function AxarCard() {
  return (
    <div>
        <div className='bg-axar w-[450px] h-80'></div>
        <div className='w-[480px] h-80 border-8 border-white ml-10 -mt-72 relative'><img src={Images.about} alt='Axar' className='w-full h-full'/></div>
        <div className='bg-axar w-[470px] h-80 ml-24 -mt-72'></div>
    </div>
  )
}

export default AxarCard