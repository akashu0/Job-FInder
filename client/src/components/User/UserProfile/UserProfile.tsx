import { PencilIcon } from "@heroicons/react/24/outline";
import {
  Avatar,
  Card,
  CardBody,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserDataPayload } from "../../../types/PayloadInterface";
import { userProfile } from "../../../features/axios/api/user/userDetails";

function UserProfile() {
  const [userDetails, setUserDetails] = useState<UserDataPayload>();

  useEffect(() => {
    const userDetails = async () => {
      const data = await userProfile();
      setUserDetails(data?.data);
    };
    userDetails();
  }, []);
  // console.log(userDetails?.userId);
  return (
    <div className=" pt-16 px-11 items-center overflow-hidden  ">
      {/* <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-purple-500/50" />
      </div> */}

      <Card className="md:flex border md:border-black  ">
        <CardBody className="md:shrink-0">
          <div className="flex flex-row-reverse">
            <Link to={"/employer/edit-profile"}>
              <Tooltip content="Edit Profile">
                <PencilIcon className="h-4 w-4 cursor-pointer   text-blue-500" />
              </Tooltip>
            </Link>
          </div>
          <div className="mb-10 flex items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src={userDetails?.image ?? ""}
                alt="img"
                size="xl"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1 ">
                  {userDetails?.userId.name ?? ""}
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  {userDetails?.is_Active ?? ""}
                </Typography>
              </div>
            </div>
          </div>
          <div className="gird-cols-1 mb-12 grid gap-4 px-4 lg:grid-cols-2 xl:grid-cols-1">
            <Typography variant="h6" color="blue-gray" className="mb-3">
              <div className="flex gap-x-3 font-normal text-blue-gray-500">
                {userDetails?.bio ?? ""}
              </div>
            </Typography>
            {/* <hr className="my-1 border-blue-gray-50" /> */}
            <div className=" md:grid grid-cols-4 gap-4">
              <CardBody className=" md:col-span-2 px-7  ">
                <div className="">
                  <h1 className="text-lg px-3 font-medium text-black my-2">
                    Age
                  </h1>

                  <span className="text-center bg-gray-400 rounded-lg px-5 py-1  text-gray-900">
                    {userDetails?.age}
                  </span>
                </div>
                <div className="pt-4">
                  <h1 className="text-lg px-1 font-medium text-black my-2">
                    Desired role
                  </h1>
                  <span className="text-center bg-gray-400 rounded-lg px-5 py-1  text-gray-900">
                    {userDetails?.previousrole}
                  </span>
                </div>
                <div className="pt-4">
                  <h1 className="text-lg px-1 font-medium text-black my-2">
                    Desired salary
                  </h1>
                  <span className="text-center bg-gray-400 rounded-lg px-5 py-1  text-gray-900">
                    {userDetails?.salary}
                  </span>
                </div>
                <div className="pt-4">
                  <h1 className="text-lg px-1 font-medium text-black my-2">
                    Desired workmode
                  </h1>
                  <span className="text-center bg-gray-400 rounded-lg px-5 py-1  text-gray-900">
                    {userDetails?.workmode}
                  </span>
                </div>
              </CardBody>
              <CardBody className="bg-gray-400  md:col-span-2 rounded-2xl mx-5 ">
                <h1 className="font-bold text-black text-xl p-5">Contact me</h1>
                <div>
                  <span className=" px-6 font-medium text-black my-2">
                    Email:
                  </span>
                  <span className="text-center bg-gray-400 rounded-lg font-semibold  text-gray-900">
                    {userDetails?.link ?? ""}
                  </span>
                </div>
                <div>
                  <span className=" px-6 font-medium text-black my-2">
                    Phone:
                  </span>
                  <span className="text-center bg-gray-400 rounded-lg font-semibold  text-gray-900">
                    {userDetails?.userId.phone ?? ""}
                  </span>
                </div>
                <div>
                  <span className=" px-6 font-medium text-black my-2">
                    Git:
                  </span>
                  <span className="text-center bg-gray-400 rounded-lg font-semibold  text-gray-900">
                    {userDetails?.link ?? ""}
                  </span>
                </div>
                <h1 className="font-bold text-black text-xl p-5 n ">Skill</h1>
                <span className="text-center bg-gray-400 px-8 rounded-lg font-semibold  text-gray-900">
                  {userDetails?.skill ?? ""}
                </span>
              </CardBody>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default UserProfile;
