import React,{useContext} from 'react'
import './index.css'
import { Button } from '@mui/material'
import {AiFillCheckCircle} from 'react-icons/ai'
import { multiStepContext } from '../contexts/StepContext'

const ForthStep = () => {
  const {userData} = useContext(multiStepContext);


  return (
    <div className='fullHeader'>
     <div className='check'><AiFillCheckCircle size={55} color='purple' /></div> 
    <div className='heading1'>{`Congratulations, ${userData['displayName']}`}</div>
    <div className='para'>You have completed onboarding, you can start using the Cutshort!</div>
    <Button className='button' variant='contained' color='secondary'>Launch Cutshort</Button>
        
    </div>
  )
}

export default ForthStep