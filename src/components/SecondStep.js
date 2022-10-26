import React,{useContext} from 'react'
import { TextField, Button } from '@mui/material'
import './index.css'
import { multiStepContext } from '../contexts/StepContext'

const SecondStep = () => {

  const {setCurrentStep, userData, setUserData} = useContext(multiStepContext);

  return (
    <div className='start'>
      <div className='heading'>Let's set up a home for all your work</div>
      <div className='para'>You can always create another workspace later.</div>
      <div className='fullHeader'>         
         <div className='textField'>
        Workspace Name
    <TextField value={userData['companyName']} onChange={(e) => setUserData({...userData, "companyName": e.target.value})} label="workspace Name" margin='normal' variant='outlined' color='secondary' />
         </div>
         <div className='textField'>
      <div>Workspace URL <span className='extra'>(optional)</span></div>  
    <div className='belowTextField'><TextField  className='tf1' label="www.cutshort.io/" disabled='disabled' in margin='normal' /><TextField value={userData['url']} onChange={(e) => setUserData({...userData, "url": e.target.value})} className='' label="Example" in margin='normal' variant='outlined' color='secondary' />
    </div>
         </div>
    
         <Button onClick={() => setCurrentStep(3)} className='button' variant='contained' color='secondary'>Create Workspace</Button>    
      </div>
    </div>
  )
}

export default SecondStep