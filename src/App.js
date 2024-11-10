import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Topic from './pages/Topic';
import About from './pages/About';
import Participants from './pages/Participants';


function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/participants' element={ <Participants /> } />
        <Route path='/topic/:command' element={ <Topic /> } />
      </Routes>
    </Router>
  );
}

export default App;
