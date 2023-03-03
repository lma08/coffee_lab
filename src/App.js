import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';

function App() {
  return(
    <Router>
      <nav> 
        <Link to='/' className='link'>Home</Link>
        <Link to='About' className='link'>About Us</Link>
        <Link to='Contacts' className='link'>Contact Us</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Contacts' element={<Contacts/>}/>
      </Routes>
    </Router>
  )
}

export default App;
