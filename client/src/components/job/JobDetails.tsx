import {
  BriefcaseIcon,
  CalendarIcon,
  CurrencyRupeeIcon,
  LinkIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ShimmerJobDetails from "../shimmer/ShimmerJobDetails";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/redux/reducer/Reducer";
import {
  clearJObDetails,
  clearJObId,
  fetchJobDetails,
} from "../../features/redux/slice/user/jobDetailsSlice";
import { UserDataPayload } from "../../types/PayloadInterface";
import {
  applyForJob,
  isApplied,
} from "../../features/axios/api/user/applyJobs";
import { userData } from "../../features/axios/api/user/userDetails";

function JobDetails() {
  const dispatch = useDispatch();
  const jobId: string =
    useSelector((state: RootState) => state.jobDetails.jobId) ?? "";

  const jobDetails = useSelector(
    (state: RootState) => state.jobDetails.jobDetails
  );

  const [applied, setApplied] = useState("Apply");
  const [user, setUser] = useState<UserDataPayload>();

  useEffect(() => {
    // console.log(jobId);
    dispatch(fetchJobDetails(jobId) as any);

    return () => {
      dispatch(clearJObDetails());
      dispatch(clearJObId());
    };
  }, [dispatch, jobId]);

  useEffect(() => {
    async function userInfo() {
      const data: UserDataPayload = await userData();

      setUser(data);
    }
    userInfo();
  }, []);

  useEffect(() => {
    async function applied() {
      const status = await isApplied(jobDetails?._id, user?._id);
      // console.log(status);

      setApplied(status?.status);
    }
    applied();
  }, [jobDetails?._id, user?._id]);

  const notify = (msg: string, type: string) => {
    type === "error"
      ? toast.error(msg, { position: toast.POSITION.TOP_RIGHT })
      : toast.success(msg, { position: toast.POSITION.TOP_RIGHT });
  };

  const jobApplyHandler = async (jobID: string, empID: string) => {
    await applyForJob(jobID, empID)
      .then((application) => {
        notify("Job applied successfully", "success");
        setApplied("Applied");
      })
      .catch((error: any) => {
        notify(error.message, "error");
      });
  };

  return (
    <div className={`max-w-md mx-auto transition-opacity duration-500`}>
      {jobDetails ? (
        <div className="max-w-md mx-auto">
          <div className="p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <BriefcaseIcon className="w-6 h-6 mr-2 text-cyan-400" />
              <div className="text-lg font-semibold text-gray-900">
                {jobDetails?.title}
              </div>
            </div>
            <div className="flex items-center mb-2 text-sm text-gray-600">
              <div className="flex items-center mr-4">
                <MapPinIcon className="w-4 h-4 mr-1 text-gray-600" />
                <span>{jobDetails?.location}</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="w-4 h-4 mr-1 text-cyan-400" />
                <span>
                  Posted on{" "}
                  {new Date(jobDetails?.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dl className="divide-y divide-gray-200">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Description
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {jobDetails?.role}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Location
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {jobDetails?.location}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Employment Type
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {jobDetails?.employmentType}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Requirements
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <ul className="list-disc list-inside">
                      {jobDetails.requirements}
                    </ul>
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Responsibilities
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <ul className="list-disc list-inside">
                      {jobDetails?.reponsibility}
                    </ul>
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Salary/month
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <div className="flex items-center">
                      <CurrencyRupeeIcon className="w-4 h-4 mr-1 text-cyan-400" />
                      <span>{jobDetails.salary}</span>
                    </div>
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Openings
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {jobDetails.openings}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Employer
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <div className="flex items-center">
                      <div className="flex items-center mr-2">
                        <BriefcaseIcon className="w-4 h-4 mr-1 text-cyan-400" />
                        <span>{jobDetails?.employer?.companyName}</span>
                      </div>
                      <div className="flex items-center">
                        <LinkIcon className="w-4 h-4 mr-1 text-cyan-400" />
                        <span>{jobDetails?.employer?.email}</span>
                      </div>
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-cyan-400 rounded hover:bg-purple-500"
                disabled={applied === "Applied"}
                onClick={() =>
                  jobApplyHandler(jobDetails._id, jobDetails?.employer?._id)
                }
              >
                {applied}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <ShimmerJobDetails />
      )}
      <ToastContainer />
    </div>
  );
}

export default JobDetails;
