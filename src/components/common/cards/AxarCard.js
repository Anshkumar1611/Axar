import React from 'react'
import Images from '../../../assets/img'

function AxarCard() {
  return (
    <div>
        <div className='bg-axar w-[250px] lg:w-[480px] h-72'></div>
        <div className='w-[250px] lg:w-[500px] h-72 border-8 border-white ml-10 -mt-64 relative'><img src={Images.about} alt='Axar' className='w-full h-full hover:scale-105'/></div>
        <div className='bg-axar w-[250px] lg:w-[500px] h-72 ml-24 -mt-64'></div>
    </div>
  )
}

export default AxarCard