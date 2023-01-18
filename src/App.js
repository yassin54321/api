import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Content from './Components/Content';
import Footer from './Components/Footer';

import Home from './Components/Home';

import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
            <Router>
            <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/card/' element={<Content/>} /> 
          <Route path='/Footer/' element={<Footer/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
