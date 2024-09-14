import { JobPostProgressProvider } from "../../context/jobPostProgressFrom"
import HomeOwnerLocation from "./homeOWnerLocation"
import TimeDuration from "./timeAndDuration";
import ReviewDetail from './reviewDetail'
import { useState } from "react"


function JobPostProgress() {
    const [step , setStep] = useState(1);
    const nextStep = () => setStep(prevStep => prevStep + 1);
    const preStep = () => setStep(prevStep => prevStep - 1);

  return (
    <JobPostProgressProvider>
        {step === 1 && <HomeOwnerLocation nextStep={nextStep} />}
        {step === 2 && <TimeDuration nextStep={nextStep} preStep={preStep} />}
        {step === 3 && <ReviewDetail nextStep={nextStep} preStep={preStep} />}
    </JobPostProgressProvider>
  )
}

export default JobPostProgress
