import { use } from "react";
import { navPromise } from "./navResource";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const navItems = use(navPromise);
    const { logo, links, actions } = navItems;

    const renderLinks = (links = []) => {
        return (
            links.map(link => (
                <NavLink key={link.id} to={link.path} className={({ isActive }) => isActive ? "text-purple-600 border-b transition duration-100" : ""}>
                    {link.label}
                </NavLink>))
        )
    };
    const renderCts = (actions = []) => {
        return (
            actions.map(action => (
                <NavLink key={action.id} to={action.path}>
                    {action.label}
                </NavLink>))
        )
    };
    return (
        <div className="bg-gray-100 shadow-sm mb-4 text-gray-800 font-semibold lg:font-bold">
            <div className="navbar w-11/12 mx-auto bg-transparent p-0">
                <div className="w-full md:w-1/3 navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 bg-gray-200 shadow-lg">
                            {renderLinks(links)}
                        </ul>
                    </div>
                    <a className="text-lg md:text-xl lg:text-2xl font-bold">{logo.text}</a>
                </div>
                <div className="navbar-end w-full hidden lg:flex">
                    <ul className="menu menu-horizontal text-base gap-3 items-center font-semibold lg:font-bold">
                        {renderLinks(links)}
                        <ul className="font-semibold bg-linear-to-br from-violet-700 to-purple-600 rounded-sm p-2 text-white">
                            {renderCts(actions)}
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Navbar;