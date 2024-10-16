// routes.js
export const ROUTES = {
    LOGIN: '/',
    ADMIN_DASHBOARD: '/admin/dashboard',
    SHOVELLER_SEARCH: '/shoveller/searchJobByList',
    SHOVELLER_ONBOARD: '/shoveller/stripeOnboard',
    HOUSEOWNER_SERVICE_PROGRESS: '/houseowner/serviceProgress',
    // HOUSEOWNER_LIST: '/houseowner/listOfShovellerApplied',
    HOUSEOWNER_CHECKOUT: '/houseowner/stripeCheckout',
    HOUSEOWNER_JOB_PROGRESS: '/houseowner/jobPostProgress',


    // allowed route for houseonwer jobStatus open
    // HOUSEOWNER_ISMATCHSHOVELLER: '/houseowner/isMatchShoveller',
    HOUSEOWNER_LISTOFSHOVELLERAPPLIED: '/houseowner/listOfShovellerApplied',
    HOUSEOWNER_ISMATCHSHOVELLER: '/houseOwner/isMatchShoveller',

    // allowed route for houseowner jobstatus is completed

    HOUSEOWNER_SERVICE_FINISHED: '/houseowner/serviceFinished',
    HOUSEOWNER_TRANSACTION: '/houseowner/transaction',

    //allowed route for shoveller when charges are enabled
    SHVOELLER_MAP: '/shoveller/searchJobByMap',
    SHOVELLER_LIST: '/shoveller/searchJobByList',
    SHOVELLER_ISMATCHHOUSEOWNER: '/shoveller/isMatchHouseOwner',
    SHOVELLER_APPLIEDJOBS:  /shoveller\/appliedJobs\/.*/i,
    SHOVELLER_SERVICE_PROGRESS: '/shoveller/serviceProgressShoveller',
    SHOVELLER_SERVICE_FINISHED: '/shoveller/serviceFinishedByShoveller',
};
  