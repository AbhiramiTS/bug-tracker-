import logo from './logo.svg';
import './App.css';
import Login from './Views/Login/login'
import {useSelector} from 'react-redux'

function App() {
  const {auth} = useSelector(state => state)
  return (
    <>
    {!auth.LoggedIn ? <Login /> :
    }
    </>
  );
}

export default App;
