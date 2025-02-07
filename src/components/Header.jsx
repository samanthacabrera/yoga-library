import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
    return (
        <header className="flex justify-between">
            <Link to="/" className="heading text-sm md:text-xl m-2">Learn Yoga Online</Link>
            <Search />
        </header>
    );
};

export default Header;
