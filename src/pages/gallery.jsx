import NavBar from '../components/navBar';
import Footer from '../components/footer'; 
 
 const Gallery = () => {
    return (
        <>
           <NavBar />
           <div className="bg-gray-100">
            <div className="max-w-6xl mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold mb-6">Gallery</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Replace with your images */}
                    <img src="image/image1.avif" alt="Gallery Image 1" className="w-full h-auto rounded-lg shadow-md" />
                    <img src="image/image3.avif" alt="Gallery Image 2" className="w-full h-auto rounded-lg shadow-md" />
                    <img src="image/image2.avif" alt="Gallery Image 3" className="w-full h-auto rounded-lg shadow-md" />
                    {/* Add more images as needed */}
                </div>
            </div>
        </div>
        <Footer />

        </>
    );
 }
 export default Gallery;