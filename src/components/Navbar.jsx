import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

    const menuLinks = <>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/allProducts'>All Products</NavLink>
    <NavLink to='/myExports'>My Exports</NavLink>
    <NavLink to='/myImports'>My Imports</NavLink>
    <NavLink to='/addExport'>Add Export</NavLink>
    </>
    return (
      <div className="navbar bg-base-100 shadow-sm mb-10">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-3"
            >
              {menuLinks}
            </ul>
          </div>
          <a className="font-bold text-xl">ImXport</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">{menuLinks}</ul>
        </div>
        <div className="navbar-end space-x-4">
          <a className="btn btn-primary text-primary-content hover:btn-primary-hover">
            LogIn
          </a>
          <a className="btn btn-secondary">SignUp</a>
        </div>
      </div>
    );
};

export default Navbar;