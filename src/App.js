import './App.css';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import ForthStep from './components/ForthStep';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { makeStyles } from '@mui/material';
import {multiStepContext} from './contexts/StepContext';
import { useContext } from 'react';

function App() {

const {currentStep} = useContext(multiStepContext);

  function showStep(step){
    switch (step) {
      case 1:
        return <FirstStep/>
      case 2:
        return <SecondStep/>
      case 3:
        return <ThirdStep/>
      case 4:
        return <ForthStep />
      default:
        return <FirstStep/> 
    }
  }
  
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
          <Stepper activeStep={currentStep - 1} orientation='horizontal' >
            <Step  >
              <StepLabel ></StepLabel>
            </Step>
            <Step >
              <StepLabel></StepLabel>
            </Step>
            <Step >
              <StepLabel></StepLabel>
            </Step>
            <Step >
              <StepLabel></StepLabel>
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
