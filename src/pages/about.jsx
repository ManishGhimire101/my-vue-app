import NavBar from "../components/navBar";
import Footer from "../components/footer";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <NavBar />
        <h1>About Us</h1>

      <h2>Kankai politechnic institude</h2>
      <h3>surunga-jhapa</h3>
      <p>Welcome to Kankai Polytechnic Institute, where we prioritize excellence in technical education. Our curriculum is designed to equip students with practical, hands-on skills that empower them to tackle real-world challenges and meet their own needs through self-reliance. The core mission of our institution is to foster independence by nurturing resourceful, skilled professionals who can thrive in their careers and lives. At Kankai Polytechnic, we believe in transforming students into confident, self-sufficient individuals capable of contributing meaningfully to society and shaping their own futures.</p>
      <p>The programs are available here is <Link to='./courses' className="text-blue-600 underline">Programs</Link></p>
      
      <Footer />
    </div>
  );
}
export default About;