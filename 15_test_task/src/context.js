import React, { useState, useEffect, useContext } from "react";
import { serviceData, bannerData, sliderData } from './data'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [serviceItems, setSrviceItems] = useState(serviceData);  
  const [bannerInfo, setBannerInfo] = useState(bannerData);
  const [sliderItems, setSliderItems] = useState(sliderData)
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
      
    setSize(window.innerWidth);
      };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        serviceItems,
        bannerInfo,
        sliderItems,size
      }}
    >
      {children}
    </AppContext.Provider>
  );
};


export const useGlobalContext = () => {
  return useContext(AppContext);
};


