// Header component for header section: Logo, Nav Items
import Title from "./Title";
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";
const Header = () => {

    const user = useContext(UserContext);
    const items = useSelector(store => store.cart.items);

    console.log(items)
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    return (
        <div className="header bg-blue-200 rounded-xl">
            <Title />
            <div className="nav-items">
                <ul>
                    <li><Link to="/" className="hover:text-gray-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                    <li><Link to="/instamart">instamart</Link></li>
                    <li><Link to="/cart">Cart - {items.length} items</Link></li>
                </ul>
            </div>
            {user.user.name}
            {isLoggedIn ? <button className="p-2 bg-gray-50 m-2 rounded h-10 ring-2 ring-purple-500 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900" onClick={() => setIsLoggedIn(false)}>Logout</button> : 
            <button className="p-2 bg-gray-50 m-2 rounded h-10 ring-2 ring-purple-500 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900" onClick={() => setIsLoggedIn(true)}>Login</button>}
        </div>
    );
};
export default Header;