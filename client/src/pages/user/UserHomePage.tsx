import React from "react";
import UserHeader from "../../components/Header/UserHeader";
import UserHome from "../../components/HomePage/UserHome";
import UserSideNav from "../../components/SideNav/UserSideNav";
import { NavRoutes } from "../../context/NavRoutes";
import { Route, Routes } from "react-router-dom";
import UserDashboard from "../../components/User/Dashboard/UserDashboard";
import UserProfile from "../../components/User/UserProfile/UserProfile";
import ExampleHeader from "../../components/Header/ExampleHeader";

function UserHomePage() {
  return (
    <div>
      <ExampleHeader />
      {/* <UserHeader /> */}
      <Routes>
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </div>
    // <div className="flex">
    //   <div className="w-1/5">
    //     <ExampleHeader />
    //     {/* <UserHeader /> */}
    //     {/* <UserSideNav routes={NavRoutes} /> */}
    //   </div>
    //   <div className="w-4/5 pl-6 pr-6">
    //     <div className="relative mx-auto flex items-center text-blue-gray-900 pb-10 pt-6"></div>
    //     <Routes>
    //       <Route path="/dashboard" element={<UserDashboard />} />
    //       <Route path="/profile" element={<UserProfile />} />
    //       {/* <Route path="/all-jobs" element={} />
    //       <Route path="/applications" element={}} />
    //       <Route path="/edit-profile" element={ } />
    //       <Route path="/messenger" element={} /> */}
    //       {/* Add more routes here */}
    //     </Routes>
    //   </div>
    // </div>
  );
}

export default UserHomePage;
