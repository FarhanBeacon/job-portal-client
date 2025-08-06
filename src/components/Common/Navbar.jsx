import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import AuthContext from "../../context/AuthContext/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser().then(() => {
      navigate("/");
    });
  };
  const links = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"myApplication"}>My Application</Link>
      </li>
      <li>
        <Link to={"addJobs"}>Add Jobs</Link>
      </li>
      <li>
        <Link to={"myPostedJobs"}>My Posted Jobs</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-2xl font-rancho">
          Job Portal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 border-2 rounded-full cursor-pointer flex justify-center items-center tooltip tooltip-bottom" data-tip={user.displayName}><h4 className="text-2xl font-rancho font-bold">{user.displayName[0]}</h4></div>
            <button onClick={handleSignOut} className="btn">
              Sign Out
            </button>
          </div>
        ) : (
          <div className="space-x-3">
            <Link to="/register" className="underline">
              Register
            </Link>
            <Link to="/signIn" className="btn">
              Sign in
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
