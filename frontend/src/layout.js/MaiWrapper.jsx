import {useEffect, useState} from 'react'
import { setUser } from '../utils/auth';


const MainWrapper = ({children}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handler = async () => {
      try {
        await setUser();
        setLoading(false);

      } catch (error) {
        console.error('Error setting user:', error);
        setLoading(false);
      }
    };

    handler();
  }, []);

  return <>{loading ? null : children}</>;
};

export default MainWrapper