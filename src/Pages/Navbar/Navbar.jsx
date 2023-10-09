import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
console.log(user)

const defaultImg = "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1696786604~exp=1696787204~hmac=c10645727b8724eecda4984ef1d8fbfba92a9c9072a57b851c28c9b1d8d62b81";

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("logged out");
        swal("Signout", "You are successfully signed out", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <li>
        {" "}
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-primary underline font-bold text-base  md:hover:btn-neutral px-4 py-2 rounded-lg"
              : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        {" "}
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-primary underline font-bold text-base md:hover:btn-neutral px-4 py-2 rounded-lg"
              : ""
          }
        >
          Signin
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to="/registration"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-primary underline font-bold text-base md:hover:btn-neutral px-4 py-2 rounded-lg"
              : ""
          }
        >
          Signup
        </NavLink>
      </li>

      {user && (
        <li>
          {" "}
          <NavLink
            to="/registered"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-primary underline font-bold text-base md:hover:btn-neutral px-4 py-2 rounded-lg"
                : ""
            }
          >
            Booked Packages
          </NavLink>
        </li>
      )}

      <li>
        {" "}
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-primary underline font-bold text-base md:hover:btn-neutral px-4 py-2 rounded-lg"
              : ""
          }
        >
          About Us
        </NavLink>
      </li>

      <li>
        {" "}
        <NavLink
          to="/faq"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-primary underline font-bold text-base md:hover:btn-neutral px-4 py-2 rounded-lg"
              : ""
          }
        >
          FAQ
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            {navLinks}
          </ul>
        </div>

        <div className="flex  items-center">
          <img
            className="w-20"
            src="https://i.ibb.co/d2kV5hY/0c2c05c184ca43fc9e4f4e709da7ca7e.jpg"
            alt=""
          />
          <h4 className="font-bold md:text-2xl text-base">
            Dev<span className="text-primary">3.0</span>
          </h4>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" font-semibold gap-8 menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>


      <div className="navbar-end">
        
     {
      user && (
        <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={`${user?.photoURL ? user?.photoURL : defaultImg}`} />
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              {user.displayName ? user.displayName : "anonymous"}
              
            </a>
          </li>
          <li><a>{user.email ? user.email : "anonymous@example.com"}</a></li>
          {console.log("js diye aslm",user.photoURL)}
          <li><Link onClick={handleLogOut}>Logout</Link></li>
        </ul>
      </div>
      )
     }

       <div >
       {user ? (
          ''
        ) : (
          <Link to="/login">
            <button className="btn btn-grad ">Signin</button>
          </Link>
        )}
       </div>


      </div>
    </div>
  );
};

export default Navbar;
