
const BgChanger = () => {

    const blue = () => {
        document.querySelector("body").style.backgroundColor = "blue";
    }
    const black = () => {
        document.querySelector("body").style.backgroundColor = "#212121";
    }
    const Olivebrown = () => {
        document.querySelector("body").style.backgroundColor = "#6F4F28";
    }
    const Random = () => {
        document.querySelector("body").style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a href="#" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Change Background Color </span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a onClick={blue} href="#" className="mr-5 hover:text-gray-900">Blue</a>
                        <a onClick={black} href="#" className="mr-5 hover:text-gray-900">Black</a>
                        <a onClick={Olivebrown} href="#" className="mr-5 hover:text-gray-900">Olive Brown</a>
                        <a onClick={Random} href="#" className="mr-5 hover:text-gray-900">Random Color</a>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default BgChanger;