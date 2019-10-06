//https://www.taniarascia.com/using-context-api-in-react/
import React from 'react';

const SettingsContext = React.createContext({});

export const SettingsContextProvider = SettingsContext.Provider;
export const SettingsContextConsumer = SettingsContext.Consumer;
export default SettingsContext;
