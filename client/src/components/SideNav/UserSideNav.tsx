import PropTypes from "prop-types";
import { Button, Typography } from "@material-tailwind/react";
import React, { ReactElement, useState } from "react";
import { NavLink } from "react-router-dom";

interface Route {
  icon: ReactElement;
  name: string;
  path: string;
  // element:ReactElement
}

interface Routes {
  pages: Route[];
}

interface NavbarProps {
  routes: Routes[];
}

function UserSideNav({ routes }: NavbarProps) {
  const [selected, setSelected] = useState(true);
  const [openSidenav, setOpenSidenav] = useState(false);
  const sidenavType = "white";
  const sidenavTypes = {
    dark: "bg-gradient-to-br from-blue-gray-800 to-blue-gray-900",
    white: "bg-white shadow-lg",
    transparent: "bg-transparent",
  };
  const handleClick = () => {
    setSelected(true);
  };

  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } fixed inset-0 z-10 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}
    >
      <div className="pt-14 m-4">
        {routes.map(({ layout, title, pages }: any, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1 ">
            {title && (
              <li className="mx-3.5 mt-4 mb-2">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-black uppercase opacity-75"
                >
                  {title}
                </Typography>
              </li>
            )}
            {pages.map(({ icon, name, path }: Route) => (
              <li key={name}>
                <NavLink to={path}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "gradient" : "text"}
                      color={isActive ? "blue-gray" : "gray"}
                      className={`flex items-center gap-4 px-4 capitalize${
                        isActive && selected ? " bg-gray-700" : ""
                      }`}
                      fullWidth
                      onClick={handleClick}
                    >
                      {icon}
                      <Typography
                        color="inherit"
                        className="font-medium capitalize"
                      >
                        {name}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
}

UserSideNav.defaultProps = {
  brandImg: "/img/logo-ct.png",
  brandName: "Material Tailwind React",
};

UserSideNav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

UserSideNav.displayName = "/src/widgets/layout/sidnave.jsx";

export default UserSideNav;
