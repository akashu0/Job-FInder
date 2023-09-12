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
    <div className="pl-16 pr-16 pt-24">
      {/* <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-purple-500/50" />
      </div> */}

      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 shadow-lg shadow-gray-400">
        <CardBody className="p-4">
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
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  {userDetails?.userId.name ?? ""}
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  {/* {userDetails?.?? ""} */}
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
            <hr className="my-1 border-blue-gray-50" />
            <div>
              <CardBody className="p-0">
                <ul className="flex flex-col gap-4 p-0">
                  <li className="flex items-center gap-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold capitalize"
                    >
                      Age:
                    </Typography>

                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      {userDetails?.age ?? ""}
                    </Typography>
                  </li>
                  <hr className="my-1 border-blue-gray-50" />
                  <li className="flex items-center gap-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold capitalize"
                    >
                      Email:
                    </Typography>

                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      {userDetails?.userId.email ?? ""}
                    </Typography>
                  </li>
                  <hr className="my-1 border-blue-gray-50" />
                  <li className="flex items-center gap-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold capitalize"
                    >
                      Location:
                    </Typography>

                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      {/* {userDetails?.location ?? ""} */}
                    </Typography>
                  </li>
                  <hr className="my-1 border-blue-gray-50" />
                  <li className="flex items-center gap-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold capitalize"
                    >
                      Education:
                    </Typography>

                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      {userDetails?.education ?? ""}
                    </Typography>
                  </li>
                  <hr className="my-1 border-blue-gray-50" />
                  <li className="flex items-center gap-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold capitalize"
                    >
                      Desired salary:
                    </Typography>

                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      {userDetails?.salary ?? ""}
                    </Typography>
                  </li>
                  <hr className="my-1 border-blue-gray-50" />
                  <li className="flex items-center gap-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold capitalize"
                    >
                      Desired role:
                    </Typography>

                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      {userDetails?.previousrole ?? ""}
                    </Typography>
                  </li>
                  <hr className="my-1 border-blue-gray-50" />
                  <li className="flex items-center gap-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold capitalize"
                    >
                      Experience:
                    </Typography>

                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      {userDetails?.experirnce ?? ""}
                    </Typography>
                  </li>
                </ul>
              </CardBody>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default UserProfile;
