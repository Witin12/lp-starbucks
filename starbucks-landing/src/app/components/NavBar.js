const NavBar = () => {
    return (
        <section className="w-full">
            <nav className="bg-white border-t-4 border-green-700 p-6 flex items-center justify-between md:justify-around">
                <img src="/img/logo.png" alt="Starbucks Logo" className="h-15 w-20" />

                <div className="flex items-center space-x-6">
                    <div className="relative hidden md:block">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border border-gray-300 pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <img src="/img/loupe.png" alt="Lupa de Pesquisa" className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 cursor-pointer" />
                    </div>

                    <img src="/img/menu.png" alt="Menu" className="h-8 w-8 cursor-pointer" />
                </div>
            </nav>
        </section>
    );
};

export default NavBar;