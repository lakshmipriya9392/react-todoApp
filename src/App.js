import './App.css';
import Dashboard from './Components/dashboard/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Signup from './Components/Signup/Signup'
import  AuthProvider  from './Auth'
import PrivateRoute from './Components/PrivateRoute'

function App() {
  return (
    <AuthProvider>
          <Router>
    <div className = "App">
      <PrivateRoute exact path="/" component={Dashboard} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </div>
  </Router>
    </AuthProvider>
  ); 
}

export default App;
