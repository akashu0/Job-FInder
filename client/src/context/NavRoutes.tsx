import {
  FaChartBar,
  FaBriefcase,
  FaSearch,
  FaFacebookMessenger,
  FaUser,
} from "react-icons/fa";

const icon = {
  className: "w-5 h-10 text-inherit",
};

export const NavRoutes = [
  {
    layout: "user",
    pages: [
      {
        icon: <FaChartBar {...icon} />,
        name: "dashboard",
        path: "/user/dashboard",
      },
      {
        icon: <FaUser {...icon} />,
        name: "Profile",
        path: "/user/profile",
      },
      {
        icon: <FaSearch {...icon} />,
        name: "Job",
        path: "/user/get-job",
      },
      {
        icon: <FaBriefcase {...icon} />,
        name: "Applied",
        path: "/user/get-applied",
      },
      {
        icon: <FaFacebookMessenger {...icon} />,
        name: "Message",
        path: "/user/chat",
      },
    ],
  },
];
