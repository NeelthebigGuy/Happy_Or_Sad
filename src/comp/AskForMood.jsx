import React from 'react'

import "./css/askformood.css"


export default function AskForMood() {
  return (
    <div className='full-height'>
        <div className='conatiner'>
            <div className='howwasyourdaybackground'>
                <div className='howwasyourday bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent md:text-[40px]'>How Was Your Mood Today?<div className='myline bg-gradient-to-r from-amber-500 to-pink-500 md:mt-2'/></div>
            </div>
            <div className='selectioncontainer mt-[50px]'>
            <i className="fa-regular fa-face-smile text-[100px]"></i>
            <i className="fa-regular fa-face-meh text-[100px]"></i>
            <i className="fa-regular fa-face-frown text-[100px]"></i>
            </div>
        </div>
    </div>
  )
}
