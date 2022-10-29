import './App.css';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import ForthStep from './components/ForthStep';
 import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel, { stepLabelClasses } from '@mui/material/StepLabel';
// import { makeStyles, StepConnector } from '@mui/material';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import {multiStepContext} from './contexts/StepContext';
import { useContext } from 'react';
// import { Stepper } from 'react-stepper-horizontal';
//import Stepper from 'react-stepper-horizontal';

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

  const ColorlibConnector = styled(StepConnector)(() => ({
      [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 30,
      },
      [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
          opacity: 1,
        },
      },
      [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
          opacity: 1,
        },
      },
      [`& .${stepConnectorClasses.line}`]: {
        height: 1,
        border: 0,
        backgroundColor: 'grey',
        opacity: 0.3,
          marginLeft: 0,
          marginRight: 0,
      },
    }));

    const ColorlibStepLabel = styled(StepLabel)(() => ({
        [`&.${stepLabelClasses.active}`]: {
          [`& .${stepLabelClasses.label}`]: {
            color: '#A020F0',
             padding: '0px',
          },
        },
        [`&.${stepLabelClasses.completed}`]: {
          [`& .${stepLabelClasses.label}`]: {
            color: '#A020F0',
          },
        },
        [`& .${stepLabelClasses.label}`]: {
          color: 'rgb(255, 255, 255, 0.3)',
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
          <Stepper activeStep={currentStep - 1} orientation='horizontal' connector={<ColorlibConnector/>} >
            <Step className='step'> 
            <ColorlibStepLabel>
            {/* <StepLabel className='stepLabel' >
              
              </StepLabel> */}
            </ColorlibStepLabel>            
              
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
      
          {/* <Stepper 
          defaultBarColor='#efefce'
          barStyle='solid'
          steps={[{}, {},{},{}]}
          activeStep={currentStep - 1}
          /> */}
      

         {/* body */}
        {showStep(currentStep)}
      </header>
    </div>
  );
}

export default App;
