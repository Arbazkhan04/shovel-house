import React from 'react'
import { FormProvider } from '../../context/houseOwnerSignupFormContext'
import PersonalDetail from './personalDetails'
import LoginAccountDetail from './loginAccountDetail'
import ServicePreference from './servicePreference'
import { useState } from 'react'

function HouseOwnerSingupProcess() {
    const [step , setStep] = useState(1);
    const nextStep = () => setStep(prevStep => prevStep + 1);
    const preStep = () => setStep(prevStep => prevStep - 1);

  return (
    <FormProvider>
        {step === 1 && <PersonalDetail nextStep={nextStep} />}
        {step === 2 && <LoginAccountDetail nextStep={nextStep} preStep={preStep} />}
        {step === 3 && <ServicePreference nextStep={nextStep} preStep={preStep} />}
    </FormProvider>
  )
}

export default HouseOwnerSingupProcess
