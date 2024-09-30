import Dashboard from './user-management/dashboard';
import ServiceDashboard from './services-management/serviceDashboard';
import QueryDashboard from './queries-management/queryDashboard';

const route = [
    { path: '/Dashboard', element: <Dashboard /> },
    { path: '/ServiceDashboard', element: <ServiceDashboard /> },
    { path: '/QueryDashboard', element: <QueryDashboard /> },

]

export default route