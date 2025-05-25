import { FaCopyright } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="bg-blue-500 text-white pt-10 pb-6">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

                        <div className="space-y-2">
                            <h3 className="font-bold text-lg mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li><Link to="/about" className="hover:underline">About us</Link></li>
                                <li><Link to="#" className="hover:underline">Team members</Link></li>
                                <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                                <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-bold text-lg mb-4">Quick links</h3>
                            <ul className="space-y-2">
                                <li><Link to="/home" className="hover:underline">Home</Link></li>
                                <li><Link to="/courses" className="hover:underline">Programs</Link></li>
                                <li><Link to="#" className="hover:underline">Timeline</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-bold text-lg mb-4">Organization</h3>
                            <ul className="space-y-2">
                                <li><Link to="#" className="hover:underline">Notice</Link></li>
                                <li><Link to="#" className="hover:underline">Privacy Policy</Link></li>
                                <li><Link to="#" className="hover:underline">Terms and Conditions</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-bold text-lg mb-4">Contact</h3>
                            <div className="space-y-2">
                                <p>98000000 (Principal)</p>
                                <p>03123173 (Assistant Principal)</p>
                                <p>07110101 (Accountant)</p>
                            </div>
                        </div>
                    </div>

                    <footer className="bg-blue-500 text-white text-center py-4">
                        <div className="flex items-center justify-center space-x-2">


                            < FaCopyright /> <p>{currentYear} Your Company Name. All rights reserved.</p>
                        </div>
                    </footer>
                </div>
            </footer>
        </>
    )
};
export default Footer;