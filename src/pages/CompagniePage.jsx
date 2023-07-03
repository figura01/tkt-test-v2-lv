import { useEffect, useState } from 'react';
import { useAppContext } from "../contexts/AppContext"
import { useParams } from 'react-router-dom';

import Chart from '../components/Charts/CustomBarChart';
import Header from '../components/Header/Header';
import ButtonReturn from '../components/ButtonReturn/BouttonReturn';


const CompagniePage = () => {
  const {getCompagnie, getResult} = useAppContext();
  const { id } = useParams();
  const [compagnie, setCompagnie] = useState({})
  const [results, setResults] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const fetchCompagnie = async () => {
      const {data, status} = await getCompagnie(`biz/${id}`);
      if(data && status === 200) {
        setCompagnie(data)
      }
    };

    fetchCompagnie(id)
  
    return () => {};
  },[getCompagnie, id])

  useEffect(() => {
    if(!compagnie) return;
    const loadTesults = async () => {
      const { results } = compagnie;
      if(results) {
        const data1 = await getResult(`result/${results[0]}`)
        const data2 = await getResult(`result/${results[1]}`) 
        let res = [ data2, data1];
        setResults(res)
        setLoaded(true)
      }

    }
    loadTesults();
    return () => {};
  },[compagnie, getResult])

  useEffect(() => {
    return () => {}
  })
      
  return <div className="flex flex-col w-full ">
      
      {loaded && results.length > 0 && (
        <>
          <Header>
            <div className="flex items-center">
              <ButtonReturn />
              <div className="flex flex-col">
                <h2>{compagnie.name}</h2>
                <span>{compagnie.siren}</span>
              </div>
            </div>
            
          </Header>
          <header className="flex flex-col w-full">
            <h2>{compagnie.name}</h2>
            {compagnie.siren}
          </header>

          <div className="grid-container grid grid-cols-8 gap-4">
            <div className="item1 col-span-4">
              <Chart title="Chiffre d'affaire" data={results} type="ca"/>
            </div>
            <div className="item2 col-span-4"><Chart title="EBITDA" data={results} type="ebitda"/></div>
            <div className="item1 col-span-4"><Chart title="Loss" data={results} type="loss"/></div>
            <div className="item2 col-span-4"><Chart title="Margin" data={results} type="margin" /> </div>
          </div>
        </>
      )}

  </div>
}

export default CompagniePage