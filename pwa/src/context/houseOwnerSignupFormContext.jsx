import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    userRole : "houseOwner",
    username: '',
    phone: '',
    address: '',
    email: '',
    name: '',
    password: '',
    services: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Get the name and value from the input
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update the field based on the name
    }));
  };

  return (
    <FormContext.Provider value={{ formData, handleChange,setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
