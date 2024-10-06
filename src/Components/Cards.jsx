import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className='cardContainer h-[50vh] w-1/2'>
        <div className='card relative w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy; 2000-2024</button>
        </div>

        </div>
        <div className='cardContainer  flex gap-5 w-1/2 h-[50vh]'>

        <div className='card relative flex items-center justify-center w-1/2 h-full bg-[#212121] rounded-xl'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>RATING 5.0 ON CLUTCH</button>
        </div>

        <div className='card relative flex items-center justify-center w-1/2 h-full bg-[#212121] rounded-xl'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className='absolute px-4 py-1 rounded-full border-2 left-10 bottom-10'>BUSINESS BOOTCAMP</button>
        </div> 
        </div>

    </div>
  )
}

export default Cards