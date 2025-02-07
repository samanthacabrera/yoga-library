import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
    return (
        <header className="m-2 backdrop-blur-md bg-white/30 p-4 rounded-lg flex justify-between items-center">
            <Link to="/" className="heading">Learn Yoga Online</Link>
            <Search />
        </header>
    );
};

export default Header;
