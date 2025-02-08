import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
    return (
        <header className="flex justify-between">
            <Link to="/" className="heading md:text-xl m-2 md:m-4">Learn Yoga Online</Link>
            <Search />
        </header>
    );
};

export default Header;
