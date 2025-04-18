import React, { useState, useEffect, useRef } from 'react';
import one from '../images/one.jpg';
import two from '../images/two.jpg';
import three from '../images/three.jpg';
import four from '../images/four.jpg';
import five from '../images/five.jpg';

const images = [one, two, three, four, five];

function LandingPages() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const intervalRef = useRef(null); // store interval reference

    const startSlider = () => {
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 5000);
    };

    useEffect(() => {
        startSlider();

        return () => clearInterval(intervalRef.current);
    }, []);

    const goToSlide = (index) => {
        clearInterval(intervalRef.current); // stop current interval
        setCurrentSlide(index);            // update slide
        setIsTransitioning(true);          // Start transition
        setTimeout(() => {
            setIsTransitioning(false);    // End transition
        }, 1000);                         // Match this with the transition duration
        startSlider();                     // restart interval
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center px-6 overflow-hidden text-white bg-black">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className={`w-full h-full object-cover absolute transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                        />
                    ))}
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                </div>

                {/* Text Content */}
                <div className="relative z-10 text-left max-w-lg mx-auto sm:mx-0 sm:pl-12 sm:w-1/2">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                        Welcome to Our Hotel & Restaurant
                    </h1>
                    <p className="text-lg sm:text-xl mb-8 max-w-xl">
                        Indulge in luxury and savor exquisite flavors at our world-class hotel and restaurant. Enjoy exceptional service, comfort, and fine dining, all in one place.
                    </p>
                    <button className="bg-amber-50 text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-amber-100 transition cursor-pointer">
                        Book Your Stay
                    </button>
                </div>

                {/* Slide Dots */}
                <div className="absolute bottom-10 left-1/2 z-10 flex gap-2 transform -translate-x-1/2">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-3 rounded-full cursor-pointer transition-all duration-300 ${index === currentSlide
                                ? 'w-8 bg-white'
                                : 'w-3 bg-gray-300 hover:bg-gray-400'
                                }`}
                        ></span>
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-6 bg-amber-100 text-gray-800">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    <div className="p-6 bg-amber-50 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2 text-green-800">Luxury Stay</h3>
                        <p className="text-green-700">Experience premium comfort in our elegantly designed hotel rooms and suites.</p>
                    </div>
                    <div className="p-6 bg-amber-50 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2 text-green-800">Fine Dining</h3>
                        <p className="text-green-700">Enjoy world-class cuisine made with fresh, locally sourced ingredients.</p>
                    </div>
                    <div className="p-6 bg-amber-50 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2 text-green-800">Exceptional Service</h3>
                        <p className="text-green-700">Our friendly staff is dedicated to making your stay memorable and hassle-free.</p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-6 bg-amber-50 text-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4 text-green-800">About Us</h2>
                    <p className="text-lg text-green-700">
                        Welcome to our hotel and restaurant — where comfort meets culinary delight. Nestled in the heart of the city, we have proudly served both travelers and locals with exceptional hospitality and unforgettable experiences.
                        <br /><br />
                        Our hotel offers a peaceful retreat with elegantly furnished rooms, modern amenities, and a warm, welcoming atmosphere that makes every guest feel at home. Whether you're visiting for business or leisure, our mission is to provide a restful and luxurious stay tailored to your needs.
                        <br /><br />
                        In addition to our accommodations, our on-site restaurant is a destination in itself. With a menu crafted by passionate chefs using only the freshest local ingredients, we serve a wide range of cuisines to delight every palate. From hearty breakfasts to gourmet dinners, every meal is prepared with care and attention to detail.
                        <br /><br />
                        Our dedicated team of staff is committed to delivering exceptional service, ensuring that every guest receives personalized care and attention from the moment they arrive. We believe that true hospitality lies in the details — and we strive to exceed expectations at every turn.
                        <br /><br />
                        Thank you for choosing us. We look forward to welcoming you and making your stay truly special.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-6 bg-amber-100 text-gray-800">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12 text-green-800">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="p-6 bg-amber-50 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2 text-green-700">Hotel Accommodations</h3>
                            <p className="text-lg text-green-700">
                                Enjoy a peaceful and luxurious stay in our well-appointed rooms, offering comfort, cleanliness, and modern amenities for all guests.
                            </p>
                        </div>
                        <div className="p-6 bg-amber-50 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2 text-green-700">Fine Dining Restaurant</h3>
                            <p className="text-lg text-green-700">
                                Savor exquisite dishes prepared by experienced chefs, featuring local and international cuisines served in a cozy and elegant ambiance.
                            </p>
                        </div>
                        <div className="p-6 bg-amber-50 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2 text-green-800">Event & Catering Services</h3>
                            <p className="text-lg text-green-700">
                                Host unforgettable events with our professional catering, banquet facilities, and dedicated staff ready to make every occasion special.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-6 bg-amber-50 text-gray-800">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-green-800">Contact Us</h2>
                    <p className="mb-8 text-green-700">Have a question or want to work with us? We'd love to hear from you!</p>
                    <form className="space-y-4">
                        <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-green-300 rounded-md" />
                        <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-green-300 rounded-md" />
                        <textarea placeholder="Your Message" rows="5" className="w-full px-4 py-2 border border-green-300 rounded-md"></textarea>
                        <button type="submit" className="bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default LandingPages;