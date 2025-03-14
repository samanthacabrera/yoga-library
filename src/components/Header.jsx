import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full h-[8vh] z-10 bg-white border-b flex justify-center items-center space-x-8">
            <Link to="/" className="text-moss md:text-xl">Learn Yoga Online</Link>
            <Search />
        </header>
    );
};

export default Header;
