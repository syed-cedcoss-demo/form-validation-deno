import './App.css';
import Login from './components/auth/Login';

function App() {
  console.log('ENV', process.env.REACT_APP_ENV);
  return <Login />;
}

export default App;
