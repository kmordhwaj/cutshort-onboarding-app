import './App.css';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import ForthStep from './components/ForthStep';
 import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel, { stepLabelClasses } from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import {multiStepContext} from './contexts/StepContext';
import { useContext } from 'react';

function App() {

const {currentStep} = useContext(multiStepContext);

  function showStep(step){
    switch (step) {
      case 0:
        return <FirstStep/>
      case 1:
        return <SecondStep/>
      case 2:
        return <ThirdStep/>
      case 3:
        return <ForthStep />
      default:
        return <FirstStep/> 
    }
  }

  const ColorlibConnector = styled(StepConnector)(() => ({
    padding:'0px',
            margin:'0px',
      [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 30,
        marginLeft: '0px',
        marginRight: '0px',
        padding:'0px' 
      },
      [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: (currentStep === 3 ?  {
          opacity: 1,
          marginLeft: '0px',
          marginRight: '0px',
          padding:'0px' 
        } :
        {
          opacity: 1,
          width:'220%',
          marginLeft: '0px',
          marginRight: '0px',
          padding:'0px' 
        }
        ) ,
      },
      [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]:
         {
          opacity: 1,
           width:'100%',
          marginLeft: '0px',
        marginRight: '0px',
        padding:'0px'
        },
      },
      [`& .${stepConnectorClasses.line}`]: {
        height: 1,
        border: 0,
        backgroundColor: 'grey',
        opacity: 0.3,
        marginLeft: '0px',
        marginRight: '0px',
        padding:'0px'
      },
    }));

    const ColorlibStepLabel = styled(StepLabel)(() => ({
      padding:'0px',
            margin:'0px',
            color:'#A020F0',
            marginLeft:'0px',
            marginRight:'0px',
        [`&.${stepLabelClasses.active}`]: {
          [`& .${stepLabelClasses.label}`]: {
            color: '#A020F0',
            padding:'0px',
            margin:'0px',
          },
        },
        [`&.${stepLabelClasses.completed}`]: {
          [`& .${stepLabelClasses.label}`]: {
            color: '#A020F0',
            padding:'0px',
            margin:'0px',
          },
        },
        [`& .${stepLabelClasses.label}`]: {
          color: 'rgb(255, 255, 255, 0.3)',
          padding:'0px',
          margin:'0px'
        },
      }));

  
  return (
    <div className="App">
      <header className="App-header">
        
        {/* logo */}
        <div className='Logo'>
          <img height={40} width={40} src="https://play-lh.googleusercontent.com/i2WvqDUR5xfvnR8f6WW7ufsXL00Wif67HNt7JzdIooU42Benq16mcyw_w0Zy82oNdg=w240-h480-rw" alt="logo" />
          Cutshort
        </div>
        
        {/* stepper */}
        <div className='center-stepper'>        
          <Stepper activeStep={currentStep} orientation='horizontal' connector={<ColorlibConnector/>} >
             <Step className='step'> 
             <ColorlibStepLabel>
             </ColorlibStepLabel>                          
             </Step>
             
             <Step >
            <ColorlibStepLabel>
             </ColorlibStepLabel>
             </Step>

             <Step >
            <ColorlibStepLabel>
             </ColorlibStepLabel>
             </Step>

             <Step >
             <ColorlibStepLabel>
             </ColorlibStepLabel>
             </Step>
          </Stepper>
        </div>

         {/* body */}
        {showStep(currentStep)}
      </header>
    </div>
  );
}

export default App;
