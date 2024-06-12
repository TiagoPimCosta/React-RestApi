import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navVisible, setNavVisible] = useState(false);

  const handleNav = () => {
    setNavVisible(!navVisible);
  };

  const navItems = [
    { id: 1, text: "Posts", route: "/" },
    { id: 2, text: "Comments", route: "/comments" },
  ];

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            React Rest Api
          </span>
        </NavLink>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={handleNav}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.route}
                  className={({ isActive }) => {
                    return isActive
                      ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
                  }}
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            navVisible
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full bg-white border-gray-200 dark:bg-gray-900 ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-750 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            REACT.
          </h1>
          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <NavLink
              to={item.route}
              key={item.id}
              onClick={() => {
                handleNav();
              }}
              className={({ isActive }) => {
                return isActive
                  ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  : "p-4 rounded-xl hover:bg-[#fff] duration-300 hover:text-black cursor-pointer";
              }}
            >
              {item.text}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
