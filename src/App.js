import './App.css';
import SignUp from './QuizComponent/forms/SignUp'
import Login from './QuizComponent/forms/Login'
import { Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <div className="App">
      
      

      <Routes>
          <Route path='/' element= {<Landing />} />
          <Route path='/signUp' element= {<SignUp />} />
          <Route path='/login' element= {<Login />} />
          <Route path='/Dashboard' element= {<Dashboard />} />
      </Routes>
        
      
      
      
    </div>
  );
}

export default App;
