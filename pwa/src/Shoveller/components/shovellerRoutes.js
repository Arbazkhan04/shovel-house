import PayementSingIn from "./paymentSingIn";
import PaymentSingUp from "./paymentSingUp";
import SeatchJobByMap from "./searchJobByMap";
import SearchJobByList from "./searchJobByList";
import IsMatchHouseOwner from "./isMatchHouseOwner"
import ServiceProgressShoveller from "./serviceProgress";
import ServiceFinishedByShoveller from "./serviceFinished";
import StripeOnboard from "./stripeOnboarding";
import AppliedJobs from './appliedJobs'

const route = [
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