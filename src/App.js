import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import Contact from './Components/Contact';
import Services from './Components/Services';
import About from './Components/About';

import Navbar from './Components/Navbar';

function App() {
  return (
      <>
      
      <Navbar></Navbar>
      
        <Routes>
            <Route exact path='/' element={<Home></Home>}></Route>
            <Route exact path='/about' element={<About></About>}></Route>
            <Route exact path='/services' element={<Services></Services>}></Route>
            <Route exact path='/contact' element={<Contact></Contact>}></Route>
            <Route path='*' element={<Home></Home>} ></Route>
            
        </Routes>

        
      </>
  );
}

export default App;
