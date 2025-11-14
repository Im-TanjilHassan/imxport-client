import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Loader from './Loader';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const {user, logout, loading} = useContext(AuthContext)

    const menuLinks = <>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/allProducts'>All Products</NavLink>
    <NavLink to='/myExports'>My Exports</NavLink>
    <NavLink to='/myImports'>My Imports</NavLink>
    <NavLink to='/addExport'>Add Export</NavLink>
    </>
    return (
      <div className="navbar rounded-2xl mb-10 fixed top-0 left-0 w-full z-50 bg-base-100 md:px-14 shadow-xl/30">
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
          <a className="font-bold text-2xl ">
            <span className="text-secondary">Im</span>Xport
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">{menuLinks}</ul>
        </div>
        <div className="navbar-end space-x-4">
          <ThemeToggle></ThemeToggle>
          {loading ? (
            <Loader></Loader>
          ) : user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content outline bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li className="text-center border-b mb-2 text-primary">
                  {user.displayName}
                </li>
                <li onClick={() => logout()}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="space-x-4">
              <Link to="/login">
                <button className="btn-outline btn-primary font-semibold md:btn md:px-8">
                  LogIn
                </button>
              </Link>

              <Link to="/register">
                <button className="btn-outline btn-primary font-semibold md:btn md:px-8">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
};

export default Navbar;