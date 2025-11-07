import React, { use } from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const { user, singOutUser } = use(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/cards/all-cards">All Products</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/products/my-products">My Products</NavLink>
          </li>
          <li>
            <NavLink to="/">My Bids</NavLink>
          </li>
          <li>
            <NavLink to="/products/create-products">Create Product</NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleSignOut = () => {
    singOutUser()
      .then(() => {
        //sign out successful
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-white px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="text-[1.3rem] md:text-3xl font-bold" to="/">
          Smart <span className="text-[#632EE3]">Deals</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Link
            onClick={handleSignOut}
            className="btn text-white px-9 rounded-full"
            style={{ background: "var(--color-primary)" }}
          >
            Log out
          </Link>
        ) : (
          <Link
            to="/login"
            className="btn text-white px-9 rounded-full"
            style={{ background: "var(--color-primary)" }}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
