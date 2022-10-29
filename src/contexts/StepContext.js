import React, { useState } from 'react'
import App from '../App';

export const multiStepContext = React.createContext();

const StepContext = () => {
    
const [currentStep, setCurrentStep] = useState(0);
const [userData, setUserData] = useState([]);
const [finalData, setFinalData] = useState([]);
const [forSelf, setForSelf] = useState(true);

function submitData (){

}

  return (
    <div>
        <multiStepContext.Provider value={{forSelf, setForSelf,submitData,currentStep, setCurrentStep, userData, setUserData, finalData,setFinalData}}>
         <App/>
        </multiStepContext.Provider>
    </div>
  )
}

export default StepContext