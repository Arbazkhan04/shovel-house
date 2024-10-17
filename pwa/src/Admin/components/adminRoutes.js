import Dashboard from './user-management/dashboard';
import ServiceDashboard from './services-management/serviceDashboard';
import QueryDashboard from './queries-management/queryDashboard';
import RefDashboard from './Referral-management/referral-Dashboard';

const route = [
    { path: '/Dashboard', element: <Dashboard /> },
    { path: '/ServiceDashboard', element: <ServiceDashboard /> },
    { path: '/QueryDashboard', element: <QueryDashboard /> },
    { path: '/RefererDashboard', element: <RefDashboard /> },

]

export default route