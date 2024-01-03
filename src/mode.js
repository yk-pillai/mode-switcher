import { createContext, useContext, useEffect, useState } from "react";

const ModeContext = createContext();

export const useMode = () => {
  return useContext(ModeContext)
}

const ModeProvider = ({children}) => {
  const [mode, setMode] = useState('light')
  useEffect(()=>{
    document.documentElement.setAttribute('data-mode',mode)
  },[mode])
  return(
    <ModeContext.Provider value={{mode,setMode}}>
      {children}
    </ModeContext.Provider>
  )
}

export default ModeProvider;
