import { Disclosure, Menu, Transition } from "@headlessui/react";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  clearUserDetails,
  fetchUser,
} from "../../features/redux/slice/user/userDetailsSlice";
import { logout } from "../../features/redux/slice/user/userLoginAuthSlice";
import { clearToken } from "../../features/redux/slice/user/tokenSlice";
import { RootState } from "../../features/redux/reducer/Reducer";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
function ExampleHeader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.userDetails.userDetails);

  useEffect(() => {
    dispatch(fetchUser() as any);

    return () => {
      dispatch(clearUserDetails());
    };
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearToken());
    navigate("/");
  };
  return (
    <nav className=" fixed top-0  z-50 w-full h-14 bg-blue-gray-50 rounded-md     flex justify-between items-center px-4 md:px-4">
      <div>
        <img
          className="m-5 w-36"
          src="https://res.cloudinary.com/dptw5t5vn/image/upload/v1694075585/job-finder_logo_poeusa.png"
          alt=""
        />
      </div>
      <ul className="md:flex hidden font-light text-lg mx-5">
        <Link to={"/user/dashboard"}>
          <li className="mx-[10px] cursor-pointer hover:text-red-300 rounded-sm">
            Home
          </li>
        </Link>
        <Link to={"/user/profile"}>
          <li className="mx-[10px] cursor-pointer hover:text-red-300">
            Profile
          </li>
        </Link>
        <Link to={"/user/job"}>
          <li className="mx-[10px] cursor-pointer hover:text-red-300">Jobs</li>
        </Link>

        <li className="mx-[10px] cursor-pointer hover:text-red-300">Applied</li>
      </ul>

      <div>
        {/* Profile dropdown */}

        <Menu as="div" className="relative ml-3">
          <div className=" md:pr-9">
            <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 ">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full "
                src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                alt="user"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                <Link to={"/user/profile"}>
                  <button
                    className={classNames(
                      "block px-4 py-2 text-sm text-black  hover:text-red-500"
                    )}
                  >
                    Profile
                  </button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to={"/messenger/user"}>
                  <button
                    className={classNames(
                      "block px-4 py-2 text-sm  text-black  hover:text-red-500"
                    )}
                  >
                    Chat
                  </button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to={"/user/job"}>
                  <button
                    className={classNames(
                      "block px-4 py-2 text-sm  text-black  hover:text-red-500"
                    )}
                  >
                    Jobs
                  </button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to={"/user/all-applications"}>
                  <button
                    className={classNames(
                      "block px-4 py-2 text-sm  text-black  hover:text-red-500"
                    )}
                  >
                    Applied Jobs
                  </button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to={"/employer/login"}>
                  <button
                    className={classNames(
                      "block px-4 py-2 text-sm  text-black  hover:text-red-500"
                    )}
                  >
                    Employer login
                  </button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <button
                  className={classNames(
                    "block px-4 py-2 text-sm  text-black  hover:text-red-500"
                  )}
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Logout
                </button>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel> */}
      </div>
    </nav>
  );
}

export default ExampleHeader;
