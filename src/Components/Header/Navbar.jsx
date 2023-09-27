import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className=" ">
        <nav className="py-4 w-full px-10 flex justify-between shadow-lg items-center bg-transparent">
          {/* <h1 className='text-xl font-semibold'>logo</h1>     */}
          <img className="w-30 h-10" src="/./public/logo.png" alt="" />
          <ul className="flex gap-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 underline"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 underline"
                    : ""
                }
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 underline"
                    : ""
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
