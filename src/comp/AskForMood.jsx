import React, { useState } from 'react'
import { motion } from 'framer-motion';

import "./css/askformood.css"


export default function AskForMood() {

  const [mood, setmood] = useState(0);
  const [noSelectedMood, setMoodSelectPageVisiabily] = useState(true);

  function HandleClick(mood){
    setmood(mood);
    setMoodSelectPageVisiabily(false);
  }

  function Faces(props){
    return(
      <motion.button className='' onClick={() => HandleClick(props.moodnumber)}
                      whileTap={{scale: 0.9}}
                      whileHover={{scale: 1.1}}>
        <i className={props.theclass}></i>
      </motion.button>
    )
    }

  return (
    <>
    {<div className={noSelectedMood ? "full-height" : "fadeout"}>
          <div className='conatiner'>
              <div className='howwasyourdaybackground'>
                  <div className='howwasyourday bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent md:text-[40px]'>How Was Your Mood Today?<div className='myline bg-gradient-to-r from-amber-500 to-pink-500 md:mt-2'/></div>
              </div>
              <div className='selectioncontainer mt-[50px]'>
              <Faces theclass="fa-regular fa-face-smile text-[100px]" moodnumber='2'/>
              <Faces theclass="fa-regular fa-face-meh text-[100px]" moodnumber='1'/>
              <Faces theclass="fa-regular fa-face-frown text-[100px]" moodnumber='0'/>
              </div>
              <div>
                {mood}
              </div>
          </div>
      </div>}
    </>
  )
}
