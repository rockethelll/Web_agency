import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Works from './pages/Works/Works'
import Navbar from './Components/Navbar/Navbar.jsx';
import StudyCase from './pages/Works/StudyCase/StudyCase';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/works' element={<Works />}/>
        <Route path='/works/:clientName-study-case' element={<StudyCase />}/>
      </Routes>
    </>
  )
}

export default App
