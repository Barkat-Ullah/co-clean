import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { toggleTheme } = useContext(AuthContext);

  const [loggedIn, setLoggedIn] = useState("");

  useEffect(() => {
    if (user) {
      setLoggedIn(user);
    } else {
      setLoggedIn(null);
    }
  }, [user]);

  const handleSignOut = () => {
    logOut().then().catch();
  };
  const links = (
    <>
      <li className="">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#C5A35E]  " : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#C5A35E]" : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#C5A35E] " : ""
          }
        >
          My Cart
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#C5A35E]  " : ""
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="relative">
      <nav className="navbar bg-slate-900 fixed top-0 right-0 left-0 ">
 
          <div className="navbar-start ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-warning lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <div className="flex justify-center items-center gap-3">
              <img
                className="w-10 h-10 sm:pl-16 md:w-40 md:h-14"
                src="https://i.ibb.co/z7s0k8B/logo.png"
                alt=""
              />

              <input
                onClick={toggleTheme}
                type="checkbox"
                className="toggle toggle-warning "
              />
            </div>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="flex gap-5 font-medium text-slate-400">{links}</ul>
          </div>
          <div className="navbar-end">
            {loggedIn && (
              <div className=" mr-6 ">
                <img className="w-12 rounded-full " src={loggedIn.photoURL} />
                <h2 className="text-[#C5A35E]">{loggedIn.displayName}</h2>
              </div>
            )}

            {user ? (
              <button
                onClick={handleSignOut}
                className="btn btn-warning font-semibold text-slate-500"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="btn btn-warning font-semibold text-slate-500"
              >
                Login
              </Link>
            )}
          </div>
        </nav>
      </div>
  );
};

export default Navbar;
