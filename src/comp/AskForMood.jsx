import { useState } from 'react'
import { motion } from 'framer-motion';

import {changemoodset, changecordx} from './MoodPageVisibility';

import "./css/askformood.css"


export default function AskForMood() {

  /* we need data from http://www.geoplugin.net/javascript.gp */

  fetch('http://www.geoplugin.net/javascript.gp')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error('Error:', error));


  /* useStates for the moods */
  const [mood, setmood] = useState(-1);
  const [noSelectedMood, setMoodSelectPageVisiabily] = useState(true);

  /* handle click function */
  function HandleClick(mood){
    setmood(mood);

    if(mood == 2){
      document.getElementById("happyselect").style.transition = ".1s";
    }

    if(mood == 1){
      document.getElementById("mehselect").style.transition = ".1s";
    }

    if(mood == 0){
      document.getElementById("sadselect").style.transition = ".1s";
    }
    
    document.getElementById("mehselect").style.opacity = "0";
    document.getElementById("happyselect").style.opacity = "0";
    document.getElementById("sadselect").style.opacity = "0";
    document.getElementById("selectionpage").style.opacity = "0";
    document.getElementById("selectionpage").style.visibility = "hidden";

    setMoodSelectPageVisiabily(false);
    changemoodset(mood);
    //changecordx();
  }

  /* react function for neater html, returns faces and handles onclick */
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
    <div id="selectionpage" className="full-height">
          <div className='conatiner'>
              <div className='howwasyourdaybackground'>
                  <div className='howwasyourday bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent md:text-[40px]'>How Was Your Mood Today?<div className='myline bg-gradient-to-r from-amber-500 to-pink-500 md:mt-2'/></div>
              </div>
              
              <div className='selectioncontainer mt-[50px]'>
                <div id="happyselect" className='happyseletiont'>
                  <Faces theclass="fa-regular fa-face-smile text-[100px]" moodnumber='2'/>
                </div>
                
                <div id="mehselect" className='mehselectiont'>
                  <Faces theclass="fa-regular fa-face-meh text-[100px]" moodnumber='1'/>
                </div>

                <div id="sadselect" className='sadselectiont'>
                  <Faces theclass="fa-regular fa-face-frown text-[100px]" moodnumber='0'/>
                </div>

                <div id="skipselect" className='skipselectiont'>
                  <motion.button className='' onClick={() => HandleClick(-1)}
                  whileTap={{scale: 0.9}}
                  whileHover={{scale: 1.1}}>
                    Dont want to answer?
                    <hr/>
                  </motion.button>
                </div>
              </div>
          </div>
      </div>
    </>
  )
}
