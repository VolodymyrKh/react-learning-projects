import React, { useState, useContext } from "react";
import { serviceData, bannerData, sliderData } from './data'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [serviceItems, setSrviceItems] = useState(serviceData);  
  const [bannerInfo, setBannerInfo] = useState(bannerData);
  const [sliderItems, setSliderItems] = useState(sliderData)

  return (
    <AppContext.Provider
      value={{
        serviceItems,
        bannerInfo,
        sliderItems
      }}
    >
      {children}
    </AppContext.Provider>
  );
};


export const useGlobalContext = () => {
  return useContext(AppContext);
};


