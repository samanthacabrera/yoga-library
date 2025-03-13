import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-10 bg-white flex justify-between">
            <Link to="/" className="text-moss md:text-xl m-2 md:m-4">Learn Yoga Online</Link>
            <Search />
        </header>
    );
};

export default Header;
