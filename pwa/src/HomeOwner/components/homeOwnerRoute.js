import HomeOwnerLocation from "./homeOWnerLocation";
import TimeDuration from "./timeAndDuration";
import PayementDetail from "./paymentDetail";
import ReviewDetail from "./reviewDetail";
import PersonalDetail from "./personalDetails";
import LoginAccountDetail from "./loginAccountDetail";
import LoginPayemtInfo from "./loginPaymentInfo";
import ServicePreference from "./servicePreference";
import IsMatchShoveller from "./isMatchShoveller"
import ServiceProgress from "./serviceProgress";
import ServiceFinished from "./serviceFinished";
import Transaction from "./transaction";


const route = [
    { path: '/homeOwnerLocation', element: <HomeOwnerLocation /> },
    { path: '/timeDuration', element: <TimeDuration /> },
    { path: '/paymentDetail', element: <PayementDetail /> },
    { path: '/reviewDetail', element: <ReviewDetail /> },
    { path: '/personalDetail', element: <PersonalDetail /> },
    { path: '/loginAccountDetail', element: <LoginAccountDetail /> },
    { path: '/loginPaymentInfo', element: <LoginPayemtInfo /> },
    { path: '/servicePreference', element: <ServicePreference /> },
    { path: '/isMatchShoveller', element: <IsMatchShoveller /> },
    { path: '/serviceProgress', element: <ServiceProgress /> },
    { path: '/serviceFinished', element: <ServiceFinished /> },
    { path: '/transaction', element: <Transaction /> },
]

export default route