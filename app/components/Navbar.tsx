import { NavLink } from "@remix-run/react";

export const Navbar = () => {
  return (
    <div className="flex w-full gap-8 bg-slate-700 text-sm sm:px-8">
      <img
        src="gamejam_logo.png"
        alt="gamejam_logo"
        className="h-16 w-40 bg-slate-300 object-cover object-center"
      />
      <div className="hidden w-full items-center justify-between sm:flex">
        <NavLink
          to="browse-games"
          className="border-b border-transparent duration-100 ease-out hover:border-white"
        >
          BROWSE GAMES
        </NavLink>
        <ul className="flex gap-16">
          <li>
            <NavLink
              to="upload-game"
              className="border-b border-transparent duration-100 ease-out hover:border-white"
            >
              UPLOAD GAME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="community"
              className="border-b border-transparent duration-100 ease-out hover:border-white"
            >
              COMMUNITY
            </NavLink>
          </li>
          <li>
            <NavLink
              to="support"
              className="border-b border-transparent duration-100 ease-out hover:border-white"
            >
              SUPPORT
            </NavLink>
          </li>
        </ul>
        <ul className="flex gap-16">
          <li>
            <NavLink
              to="signup"
              className="border-b border-transparent duration-100 ease-out hover:border-white"
            >
              Sign up
            </NavLink>
          </li>
          <li>
            <NavLink
              to="login"
              className="border-b border-transparent duration-100 ease-out hover:border-white"
            >
              Log in
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
