import { NavLink } from "react-router-dom";
import './MenuItem.css';
import { IconDashboard } from '../Icons/IconDashboard';
import { IconBell } from '../Icons/IconBell';
import { IconChat } from '../Icons/IconChat';
const MenuItem = ({url, text, name}) => {
  return <li className="flex">
    <NavLink to={url} className="flex uppercase nav-link w-full">
      
      {({ isActive }) => (
        <div className="nav-link-content">
          {
            name === 'dashboard' ? <IconDashboard color={isActive ? "#4E59FF" : "black"} /> :
            name === 'chat' ? <IconChat color={isActive ? "#4E59FF" : "black"}/> :
            <IconBell color={isActive ? "#4E59FF" : "black"}/>
          }
          
          <p className="ml-4">{text}</p>
        </div>
      )}

        
      
    </NavLink>
  </li>
}

export default MenuItem