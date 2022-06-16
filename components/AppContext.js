import { createContext, useContext } from 'react'

export const AppContext = createContext(null)

export const useAppContext = () => useContext(AppContext)

export const AppContextProvider = ({ children, value }) => (
  <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
)