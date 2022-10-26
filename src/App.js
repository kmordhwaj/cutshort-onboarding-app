import './App.css';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import ForthStep from './components/ForthStep';
import {Stepper, Step, StepLabel} from '@mui/material';
import {multiStepContext} from './contexts/StepContext';
import { useContext } from 'react';

function App() {

const {currentStep, finalData} = useContext(multiStepContext);

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
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <div className='Logo'>
          <img height={40} width={40} src="https://play-lh.googleusercontent.com/i2WvqDUR5xfvnR8f6WW7ufsXL00Wif67HNt7JzdIooU42Benq16mcyw_w0Zy82oNdg=w240-h480-rw" alt="logo" />
          Cutshort
        </div>

        <div className='center-stepper'>
          <Stepper style={{width: '80%'}} activeStep={currentStep - 1} orientation='horizontal' >
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        {showStep(currentStep)}
      </header>
    </div>
  );
}

export default App;
