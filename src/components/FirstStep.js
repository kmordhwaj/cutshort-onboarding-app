import React,{useContext} from 'react'
import { TextField, Button } from '@mui/material'
import './index.css'
import { multiStepContext } from '../contexts/StepContext'

const FirstStep = () => {

  const {setCurrentStep, userData, setUserData} = useContext(multiStepContext);

  return (
    <div className='start'>
      <div className='heading'>Welcome! First things first...</div>
      <div className='para'>You can always change them later.</div>
    <div className='fullHeader'>
        
        <div className='textField'>
            Full Name
        <TextField value={userData['fullName']} onChange={(e) => setUserData({...userData, "fullName": e.target.value})} label="Full Name" margin='normal' variant='outlined' color='secondary' />
        </div>
        <div className='textField'>
            Display Name
        <TextField value={userData['displayName']} onChange={(e) => setUserData({...userData, "displayName": e.target.value})} label="Display Name" margin='normal' variant='outlined' color='secondary' />
        </div>
        
        <Button onClick={() => setCurrentStep(1)} className='button' variant='contained' color='secondary'>Create Workspace</Button>
        
    </div>
    </div>
  )
}

export default FirstStep