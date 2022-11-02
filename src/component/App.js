import '../components/App.css';
import Login from './login';
import Register from './registration';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/user/login" element={<Login/>}/>
          <Route path="/user/register" element={<Register/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
