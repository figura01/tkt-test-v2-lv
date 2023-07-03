import { Link } from "react-router-dom"
import { useAppContext } from "../../contexts/AppContext";

import './CompagnieList.css';

const CompagnieList = ({compagnies}) => {
  const { setSelectedCompagnie  } = useAppContext();

  return <div className="compagnies flex flex-col w-full">
    <div className="compagnie-list-header flex">
      <div className="w-1/3">Compagny</div>
      <div className="w-1/3">N° Siren</div>
      <div className="w-1/3">Sector</div>
    </div>
    <ul className="compagnie-list flex flex-col">
      {compagnies.map((c) => (
        <li className="compagnie-list-item flex" key={`compagnie-${c.id}`}>
          <Link to={`compagnie/${c.id}`} onClick={() => {setSelectedCompagnie(c)}}>
            <div className="w-1/3">{c.name}</div>
            <div className="w-1/3">{c.siren}</div>
            <div className="w-1/3">
              <span className="sector ">{c.sector}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
}

export default CompagnieList