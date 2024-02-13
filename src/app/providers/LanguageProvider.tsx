"use client";
import React, { createContext, useState, useEffect } from "react";
import { languagesCodes, countriesCodes } from "../utils/constants";

// Create a context
export const LanguageContext = createContext<{
  userLanguage: string;
  userLocation: string;
}>({
  userLanguage: "en",
  userLocation: "US",
});

// Create a provider component
export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userLocation, setUserLocation] = useState<string>("US");
  const [userLanguage, setUserLanguage] = useState<string>("en");

  useEffect(() => {
    // Fetch user's location
    const browserPreferance: string[] = navigator.language.split("-");

    // Detect user's preferred language
    setUserLanguage(
      languagesCodes[browserPreferance[0]] ? browserPreferance[0] : "en"
    );
    if (browserPreferance[1]) {
      setUserLocation(
        !!countriesCodes[browserPreferance[1]] ? browserPreferance[1] : "US"
      );
    } else {
      setUserLocation("US");
    }
  }, []);

  const handleSetLocation = (locale: string) => {
    setUserLocation(locale);
  };

  const handleSetLanguage = (language: string) => {
    setUserLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ userLocation, userLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
