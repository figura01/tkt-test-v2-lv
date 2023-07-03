import { createContext, useState, useContext } from "react";
import apiHandler from '../api/service';
export const AppContext = createContext();

import Avatar from '../assets/Avatar.svg';
// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(AppContext);
}

export const AppProvider = props => {
  // const [isLoading, setIsLoading] = useState(false);
  const [userLogged, setUserLogged] = useState({
    avatar: Avatar,
    firstName: 'Sophie',
    lastName: 'Lemarchand',
    email: 'sophie.l@gmail.com'
  })
  const [ctxCompagnies, setCtxCompagnies] = useState([]);
  const [selectedCompagnie, setSelectedCompagnie] = useState({});

  const getCompagnies = async (endPoint) => {
    try {
      const { data, status} = await apiHandler.getAll(endPoint);
      // le.log(data)
      return {data, status}
    } catch(error) {
      le.log(error)
      return error
    }
  }

  const getCompagnie = async (endPoint) => {
    try {
      const { data, status } = await apiHandler.getOne(endPoint);
      return { data, status };

    }catch(error) {
      le.log(error)
      return error
    }
  }

  const getResults = async (endPoint) => {
    const allResults = await apiHandler.getAll(endPoint);
    return allResults
  }

  const getResult = async (endPoint) => {
    try {
      const { data, status } = await apiHandler.getOne(endPoint);
      if(status === 200) {
        return data
      }

    } catch(error) {
      le.log(error)
    }
  }

  const appData = { getResults, getResult, getCompagnies, getCompagnie, ctxCompagnies, selectedCompagnie, setSelectedCompagnie, userLogged, setUserLogged, setCtxCompagnies };

  return (
    <AppContext.Provider value={appData}>
      {props.children}
    </AppContext.Provider>
  )
}

