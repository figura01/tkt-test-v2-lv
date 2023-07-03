import { useEffect, useState } from 'react';
import { useAppContext } from '../contexts/AppContext';

import Header from '../components/Header/Header';
import Filters from '../components/Filters/Filters';
import CompagnieList from '../components/CompagnieList/CompagnieList';

const DashboardPage = () => {
  const { getCompagnies,  } = useAppContext();
  const [compagnies, setCompagnies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  // const ListSectors = compagnies.map((c) => c.sector);

  useEffect(() => {
    const fetchCompagnies = async () => {
      try {
        const { data } = await getCompagnies('/biz');
        setCompagnies(data)
       

      } catch(error) {
        
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchCompagnies();
    return () => {}
  }, [getCompagnies])
  return <div className="flex flex-col w-full">
    <Header>
      <h2>Welcome on TKT dashboard!</h2>
    </Header>

    <Filters />
    {!isLoading && compagnies && 
      <CompagnieList compagnies={compagnies} />
    }
    {isError && <p>{isError}</p>}
  </div>
}

export default DashboardPage