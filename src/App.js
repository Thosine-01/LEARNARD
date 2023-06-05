import './App.css';
import SignUp from './QuizComponent/forms/SignUp'
import Login from './QuizComponent/forms/Login'
import { Routes, Route } from 'react-router-dom';
import Landing from './QuizComponent/Landing';


function App() {
  return (
    <div className="App">
      
      

      <Routes>
          <Route path='/' element= {<Landing />} />
          <Route path='/signUp' element= {<SignUp />} />
          <Route path='/login' element= {<Login />} />
      </Routes>
        
      
      
      
    </div>
  );
}

export default App;
