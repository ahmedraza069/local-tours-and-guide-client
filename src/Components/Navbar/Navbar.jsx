import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().then().catch();
  };

  return (
    <div className=" shadow-lg " style={{ backgroundImage: 'url("https://i.ibb.co/9VscrKy/cool-background-3.png")' }}>
      <div className="navbar  container mx-auto">
        <div className="navbar-start py-5">
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
              className="menu menu-sm dropdown-content mt-3 w-52 z- p-2 shadow rounded-box font-bold z-10"
              style={{ backgroundImage: 'url("https://i.ibb.co/9VscrKy/cool-background-3.png")' }}>
              <li>
              <NavLink to={'/'}>Home</NavLink>
              </li>
              <li>
              <NavLink to={'/services'}>All Services</NavLink>
              </li>
           {
            user &&    <li>
            <NavLink to={'/dashboard'}>Dashboard</NavLink>
              <ul className="p-2 W-36">
              <li >
                <NavLink to={'/my-services'}>My Services</NavLink>
                </li>
                <li>
                <NavLink to={'/add-services'}>Add Services</NavLink>
                </li>
                <li >
                <NavLink to={'/my-schedules'}>My Schedules</NavLink>
                </li>
              </ul>
            </li>
           }
              <li>
              <NavLink to={'/contact'}>Contact</NavLink>
              </li>
            </ul>
          </div>
        <img className="w-32" src="https://i.ibb.co/2gd0CMj/Untitled-6.jpg" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 font-bold z-10">
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/services'}>All Services</NavLink>
            </li>
           {
            user &&  <li  tabIndex={0}>
            <details >
              <summary><NavLink>Dashboard</NavLink></summary>
              <ul className="w-36">
                <li >
                <NavLink to={'/my-services'}>My Services</NavLink>
                </li>
                <li>
                <NavLink to={'/add-services'}>Add Services</NavLink>
                </li>
                <li >
                <NavLink to={'/my-schedules'}>My Schedules</NavLink>
                </li>
              </ul>
            </details>
          </li>
           }
            <li>
            <NavLink to={'/contact'}>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex justify-center items-center">
              <div className="dropdown dropdown-end flex justify-center items-center gap-1">
                <div className="hidden md:block lg:block">
                  <p className="text-black font-medium pl-3 text-sm">
                    {user.email}
                  </p>
                </div>
                <div>
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} alt="User Avatar" />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow flex justify-center items-center bg-base-100 rounded-box w-36"
                  >
                    <li>
                      <p className="text-center py-3">{user.displayName}</p>
                    </li>
                    <li>
                      <Link
                        className="py-3 px-5 font-semibold uppercase text-base border text-white" style={{ backgroundImage: 'url("https://i.ibb.co/Y2vFWWw/cool-background-4.png")' }}
                        onClick={handleLogout}
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn text-white font-semibold uppercase text-base border " style={{ backgroundImage: 'url("https://i.ibb.co/Y2vFWWw/cool-background-4.png")' }}>
                Log In
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
