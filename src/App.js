import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/UI/navbar/Navbar'
import AppRouter from './components/AppRouter'
import { AuthContext } from './context'

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    if(localStorage.getItem('isAuth') === 'true') {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, [] );


  return (
    <AuthContext.Provider value={{
      isAuth,
      isLoading,
      setIsAuth
    }}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>

  )
}

export default App