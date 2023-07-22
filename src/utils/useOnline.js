import { useState, useEffect } from 'react'

function useOnline() {
  const [ isOnline, setIsOnline ] = useState(true);
  
  useEffect( () => {
    const handleOnline = () => {
        setIsOnline(true);
    }
    const handleOffline = () => {
        setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
        window.removeEventListener("online", handleOnline );
        window.removeEventListener("offine", handleOffline );
    }
  }, [])

  return isOnline;
}

export default useOnline;