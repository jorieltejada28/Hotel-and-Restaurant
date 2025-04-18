function Headers() {
    return (
        <>
            <header className="bg-amber-50 shadow-md py-4 px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-green-700 ml-15">
                    MyWebsite
                </a>

                <nav className="flex-1 flex justify-center space-x-6">
                    <a href="#" className="text-green-700 hover:text-green-900 font-medium">About</a>
                    <a href="#" className="text-green-700 hover:text-green-900 font-medium">Services</a>
                    <a href="#" className="text-green-700 hover:text-green-900 font-medium">Contact</a>
                </nav>

                <div className="space-x-4 mr-10">
                    <a
                        href="#"
                        className="text-green-700 border border-green-700 px-4 py-2 rounded-full hover:bg-green-700 hover:text-amber-50 transition">
                        Sign In
                    </a>
                    <a
                        href="#"
                        className="text-green-700 border border-green-700 px-4 py-2 rounded-full hover:bg-green-700 hover:text-amber-50 transition">
                        Sign Up
                    </a>
                </div>
            </header>
        </>
    );
}

export default Headers;
