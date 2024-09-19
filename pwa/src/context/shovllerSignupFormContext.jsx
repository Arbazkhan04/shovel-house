import React, { createContext, useContext, useState } from 'react';

const ShovellerSignupContext = createContext();

export const useShovellerSignupContext = () => useContext(ShovellerSignupContext);

export const ShovellerSignupProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    userRole: "shoveller",
    username: '',
    phone: '',
    address: '',
    email: '',
    neighborhood: '',
    name: '',
    password: '',
    servicesProvide: []
  });

    // Add selectedServices state for tracking service selections
    const [selectedServices, setSelectedServices] = useState([]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <ShovellerSignupContext.Provider value={{ formData, handleChange,setFormData,selectedServices, setSelectedServices }}>
      {children}
    </ShovellerSignupContext.Provider>
  );
};
