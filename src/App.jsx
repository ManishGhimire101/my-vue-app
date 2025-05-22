import './App.css';
import Home from './pages/home';
import Gallery from './components/gallery';
import Contact from './components/contact';
import Courses from './components/courses';
import Teacher from './components/teacher';
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
      </Routes>
    </>
  )
}

export default App;
