import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-amber-100 text-green-700 py-12">
            <div className="max-w-6xl mx-auto px-6">
                {/* Social Media Links Section */}
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex justify-center gap-6 text-2xl">
                        <a href="https://www.facebook.com" className="text-green-700 hover:text-green-900" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://www.twitter.com" className="text-green-700 hover:text-green-900" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com" className="text-green-700 hover:text-green-900" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com" className="text-green-700 hover:text-green-900" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* More Information Section */}
                <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold mb-4">About Our Hotel & Restaurant</h3>
                    <p className="text-sm mb-2">At [Hotel Name], we offer a luxurious stay with top-tier services and facilities, perfect for your getaway. Our restaurant serves delicious meals made with fresh, locally sourced ingredients. Whether you're here for business or leisure, we promise an unforgettable experience.</p>
                    <p className="text-sm mb-2">Explore our services and make reservations easily through our <a href="/menu" className="text-green-700 hover:text-green-900">Menu Page</a> or <a href="/bookings" className="text-green-700 hover:text-green-900">Booking Page</a>.</p>
                </div>

                {/* Join Our Team Section */}
                <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold mb-4">Join Our Team</h3>
                    <p className="text-sm mb-4">We are looking for passionate individuals to join our team. Whether you’re an experienced chef, server, or hotel staff, if you love hospitality, we want to hear from you!</p>
                    <p className="text-sm mb-4">Please send your resume and cover letter to <a href="mailto:careers@hotelrestaurant.com" className="text-green-700 hover:text-green-900">careers@hotelrestaurant.com</a>.</p>
                </div>

                {/* Footer Copyright */}
                <div className="text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} [Hotel Name] & Restaurant. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;