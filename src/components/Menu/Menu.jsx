

import Logo from '../../assets/Logo.svg'
import UserLogged from '../UserLogged/UserLogged';
import MenuItem from './MenuItem';
import IconDashboard from '../../assets/icon-dashboard.svg'
import IconBell from '../../assets/icon-bell.svg';
import IconChat from '../../assets/icon-chat-bubble-question.svg';

import './Menu.css';
import './MenuItem.css';

const Menu = () => {
  const navigations = [
    {
      name: 'dashboard',
      text:'Dashboard',
      url: 'dashboard',
      icon: IconDashboard
    },
    {
      name: 'bell',
      text:'Alerts',
      url: 'bell',
      icon: IconBell
    },
    {
      name: 'chat',
      text:'Chat',
      url: 'chat',
      icon: IconChat
    },

  ];
  return <div className="flex flex-col h-screen justify-between">
    <div>
      <img src={Logo} alt="" className="logo"/>
      <nav>
        <ul>
          {navigations.map((n,i) => <MenuItem key={`menu-item-${i}`} {...n} /> )}
        </ul>
      </nav>
      </div>
    <UserLogged />
  </div>
}

export default Menu;