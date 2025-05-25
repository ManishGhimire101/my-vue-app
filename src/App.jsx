import './App.css';
import Home from './pages/home';
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import Courses from './pages/courses';
import Teacher from './pages/teacher';
import About from './pages/about';
import { Routes, Route } from 'react-router-dom';



function App() {


  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </>
  )
}

export default App;
