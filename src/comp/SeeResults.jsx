import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';

import './css/seeresults.css';


export default function SeeResults(props) {

  let userchoice = props.selection;
  let hasuserchoosed = props.boolean

  //plus 0 just for a init.
  let totalchoice = 0 + props.totalamount;
  

  let precentofsad = props.precentofsad;
  let precentofmeh = props.precentofmeh;
  let precentofhappy = props.precentofhappy;

  function Userface(props){
    
    if(userchoice == 0){
    return(
      <div className='dashoncenter'>you said you are feeling down</div>  
    )
    }

    if(userchoice == 1){
      return(
        <div className='dashoncenter'>you said you are feeling okay</div>  
      )
      }

      if(userchoice == 2){
        return(
          <div className='dashoncenter'>you said you are feeling good</div>  
        )
      }
      else{
        return(<div className='dashoncenter'>mood not readable</div>  )
      }
  }


  return (
        <>
        <div className='mycenter'>

          <motion.span className='w-full h-full' initial={{opacity: 0, scale: .9}}
                                          animate={hasuserchoosed ? {opacity: 0} : {opacity: 1, scale: 1}}
                                          transition={{delay: 1.5, duration: .5}}>
              <div className='myothercenter'>
                <div className='dashback flex flex-col'>
                  
                  <div className='dashtitle pb-8 md:pb-0'>Out of {totalchoice} People</div>
                  
                  <div className='groupdash flex-col md:flex-row'>
                    <div className='dashbackitem'>
                      <Userface theclass={userchoice}/>
                    </div>
                    <div className='dashbackitem'>
                      <div className='dashoncenter p-2'>percent of poeple with the same mood as you is: {precentofsad}</div>
                    </div>
                  </div>
                </div>
              </div>  
          </motion.span>
        </div>
      </>
  )
}
