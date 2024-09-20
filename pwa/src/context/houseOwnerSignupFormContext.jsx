import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    userRole : "houseOwner",
    userName: '',
    phone: '',
    address: '',
    email: '',
    name: '',
    password: '',
    services: [], 
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Get the name and value from the input
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update the field based on the name
    }));
  };

  const handleImageChange = (image) => {
    setFormData((prevData) => ({
      ...prevData,
      image
    }));
  };

  return (
    <FormContext.Provider value={{ formData, handleChange,setFormData,handleImageChange }}>
      {children}
    </FormContext.Provider>
  );
};
