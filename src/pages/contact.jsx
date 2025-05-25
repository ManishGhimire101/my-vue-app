import NavBar from '../components/navBar';
import Footer from '../components/footer';

const Contact = () => { return (
   <>
      <NavBar />
      <div className="min-screen bg-white flex flex-col md:flex-row items-center justify-center p-10">
         <div className="w-full md:w-1/2 p-5">
            <h1 className="text-3xl font-bold mb-4 text-blue-500">Contact Us</h1>
            <form className="space-y-4">
               <input type="text" placeholder="Full Name" className="w-full p-2 border border-gray-300 rounded" />
               <input type="text" placeholder="Subject" className="w-full p-2 border border-gray-300 rounded" />
               <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
               <textarea placeholder="Description" className="w-full p-2 border border-gray-300 rounded h-32"></textarea>
               <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send Message</button>
            </form>
         </div>
         <div className="hidden md:block w-px bg-gray-300 h-auto mx-5"></div>
         <div className="w-full md:w-1/2 p-5">
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812.3825675088233!2d87.92455367558766!3d26.63975277176746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5bddb3bce1847%3A0x2ea987af31178f84!2sKankai%20polytechnic%20institute!5e1!3m2!1sen!2snp!4v1747932197391!5m2!1sen!2snp"
               width="100%"
               height="400"
               style={{ border: 0 }}
               allowFullScreen=""
               loading="lazy"
               title="Google Maps"
            ></iframe>
         </div>
      </div>
      <Footer />
   </>
)};
export default Contact;