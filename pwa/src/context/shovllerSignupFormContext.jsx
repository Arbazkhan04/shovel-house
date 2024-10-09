import React, { createContext, useContext, useState } from 'react';

const ShovellerSignupContext = createContext();

export const useShovellerSignupContext = () => useContext(ShovellerSignupContext);

export const ShovellerSignupProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    userRole: "shoveller",
    userName: '',
    phone: '',
    address: '',
    email: '',
    // neighborhood: '',
    latitude: '',
    referredBy: '',
    longitude: '',
    name: '',
    password: '',
    servicesProvide: [],
    image: null // Add image state here
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

  const handleImageChange = (image) => {
    setFormData((prevData) => ({
      ...prevData,
      image
    }));
  };


  return (
    <ShovellerSignupContext.Provider value={{ formData, handleChange,setFormData,selectedServices, setSelectedServices, handleImageChange }}>
      {children}
    </ShovellerSignupContext.Provider>
  );
};
