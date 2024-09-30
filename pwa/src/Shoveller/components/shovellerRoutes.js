import ShovellerDetails from "./shovellerDetails";
import ServiceDetail from "./servicesDetail";
import PayementSingIn from "./paymentSingIn";
import PaymentSingUp from "./paymentSingUp";
import SeatchJobByMap from "./searchJobByMap";
import SearchJobByList from "./searchJobByList";
import IsMatchHouseOwner from "./isMatchHouseOwner"
import ServiceProgressShoveller from "./serviceProgress";
import ServiceFinishedByShoveller from "./serviceFinished";
import ShovellerPersonalDetail from "./shovellerPersonalInfo";
import ShovellerSignupProcess from "./shovellerSignupProcess";
import StripeOnboard from "./stripeOnboarding";
import AppliedJobs from './appliedJobs'

const route = [
    // { path:'/shovellerDetails', element: <ShovellerDetails /> },
    // { path:'/serviceDetail', element: <ServiceDetail /> },
    // { path:'/shovellerPersonalDetail', element: <ShovellerPersonalDetail /> },
    { path:'/shovellerSignupProcess', element: <ShovellerSignupProcess /> },
    { path:'/appliedJobs/:shovellerId', element: <AppliedJobs /> },
    { path:'/stripeOnboard', element: <StripeOnboard /> },
    { path:'/paymentSingIn', element: <PayementSingIn /> },
    { path:'/paymentSingUp', element: <PaymentSingUp /> },
    { path:'/searchJobByMap', element: <SeatchJobByMap /> },
    { path:'/searchJobByList', element: <SearchJobByList /> },
    { path:'/isMatchHouseOwner', element: <IsMatchHouseOwner /> },
    { path:'/serviceProgressShoveller', element: <ServiceProgressShoveller /> },
    { path:'/serviceFinishedByShoveller', element: <ServiceFinishedByShoveller /> },
]

export default route;