import { useAppContext } from '../../contexts/AppContext';
import './UserLogged.css';

const UserLogged = () => {
  const { userLogged } = useAppContext();
  return <div className="card-connect">
    <img src={userLogged.avatar} alt="#" />
    <div className="card-connect-content">
      <p className="user-name">{userLogged.firstName} {userLogged.lastName.slice(0, 1)} </p>
      <p className="user-email" >{userLogged.email}</p>
    </div> 
  </div>
}

export default UserLogged