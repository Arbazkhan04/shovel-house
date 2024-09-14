import React, { createContext, useContext, useState } from 'react';

const JobPostProgressContext = createContext();
export const useJobPostProgressContext = () => useContext(JobPostProgressContext);

// JobPostProgressProvider

export const JobPostProgressProvider = ({ children }) => {
    const [jobPostProgress, setJobPostProgress] = useState({
        location: { address: '', lat: null, lng: null },
        selectedServices: [],
        scheduledTime: {
            hour: "06",
            minute: "30",
            period: "AM"
        },
        serviceDuration: '',
        paymentOffering: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobPostProgress((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const addService = (service) => {
        setJobPostProgress((prevData) => ({
            ...prevData,
            selectedServices: [...prevData.selectedServices, service],
        }));
    };

    const removeService = (service) => {
        setJobPostProgress((prevData) => ({
            ...prevData,
            selectedServices: prevData.selectedServices.filter((s) => s !== service),
        }));
    };

    // Set scheduled time (for both time and period)
    const setScheduledTime = (hour, minute, period) => {
        setJobPostProgress((prevData) => ({
            ...prevData,
            scheduledTime: { hour, minute, period },
        }));
    };

    // New function to set location (both address and lat/lng)
    const setLocation = (address, lat, lng) => {
        setJobPostProgress((prevData) => ({
            ...prevData,
            location: { address, lat, lng },
        }));
    };

    const setServiceDuration = (duration) => {
        setJobPostProgress((prevData) => ({
            ...prevData,
            serviceDuration: duration,
        }));
    };
    
    const setPaymentOffering = (offering) => {
        setJobPostProgress((prevData) => ({
            ...prevData,
            paymentOffering: offering,
        }));
    };

    return (
        <JobPostProgressContext.Provider value={{
            jobPostProgress,
            handleChange,
            setJobPostProgress,
            addService,
            removeService,
            setScheduledTime,
            setLocation, // Pass this to the provider
            setServiceDuration,
            setPaymentOffering,
        }}>
            {children}
        </JobPostProgressContext.Provider>
    );
};

