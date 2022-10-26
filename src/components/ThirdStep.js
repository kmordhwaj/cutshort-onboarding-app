import React,{useContext} from 'react'
import { Button } from '@mui/material'
import {IoMdPerson, IoIosPeople} from 'react-icons/io'
import './index.css'
import { multiStepContext } from '../contexts/StepContext'

const ThirdStep = () => {
  const {setCurrentStep, forSelf, setForSelf} = useContext(multiStepContext);


  return (
    <div className='start'>
    <div className='heading'>How are you planning to use Cutshort?</div>
    <div className='para'>We'll streamline your setup experience accordingly.</div>
  <div className='fullHeader'>
      <div className='wrap'>
      {forSelf ? <div onClick={() => setForSelf(!forSelf)} className='wrapper1'>
          <IoMdPerson size={30} color='purple' />
          <h3>For myself</h3>
         <div>Write better, Think more clearly. Stay organized.</div> 
     </div> : <div onClick={() => setForSelf(!forSelf)} className='wrapper'>
          <IoMdPerson size={30} />
          <h3>For myself</h3>
         <div>Write better, Think more clearly. Stay organized.</div> 
     </div> }
     {
      forSelf ? <div className='wrapper' onClick={() => setForSelf(!forSelf)} >
      <IoIosPeople size={31} />
          <h3>With my team</h3>
          <div>Wikis, docs, tasks & projects, all in one place.</div>
      </div> : <div className='wrapper1' onClick={() => setForSelf(!forSelf)} >
      <IoIosPeople size={31} color='purple'/>
          <h3>With my team</h3>
          <div>Wikis, docs, tasks & projects, all in one place.</div>
      </div>
     }
      
      
      </div>
      <Button onClick={() => setCurrentStep(4)} className='button' variant='contained' color='secondary'>Create Workspace</Button>
      
  </div>
  </div>
  )
}

export default ThirdStep