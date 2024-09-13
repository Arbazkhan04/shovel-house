import React, { useState } from 'react';
import {ShovellerSignupProvider} from '../../context/shovllerSignupFormContext';
import ShovellerDetails from './shovellerDetails';
import ServiceDetail from './servicesDetail';
import ShovellerPersonalDetail from './shovellerPersonalInfo'
import ShovellerLoginDetails from './shovellerLoginDetails'

function ShovellerSignupProcess() {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep(prevStep => prevStep + 1);
  const preStep = () => setStep(prevStep => prevStep - 1);

  return (
    <ShovellerSignupProvider>
      {step === 1 && <ShovellerDetails nextStep={nextStep} />}
      {step === 2 && <ServiceDetail nextStep={nextStep} preStep={preStep} />}
      {step === 3 && <ShovellerPersonalDetail nextStep={nextStep} preStep={preStep} />}
      {step === 4 && <ShovellerLoginDetails nextStep={nextStep} preStep={preStep} />}
    </ShovellerSignupProvider>
  );
}

export default ShovellerSignupProcess;
