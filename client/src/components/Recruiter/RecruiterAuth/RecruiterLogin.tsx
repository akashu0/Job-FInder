import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { RootState } from "../../../features/redux/reducer/Reducer";
import { useForm } from "react-hook-form";
import { LoginPayload } from "../../../types/PayloadInterface";
import { yupResolver } from "@hookform/resolvers/yup";
import { userLoginValidationSchema } from "../../../util/validation";
import { recruiterLoginSuccess } from "../../../features/redux/slice/recruiter/recruiterDetailsSlice";
import { setRecruiterToken } from "../../../features/redux/slice/recruiter/recruiterTokenSlice";
import { recruiterLogin } from "../../../features/axios/api/recruiter/recruiterAuth";

function RecruiterLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recruiterToken = localStorage.getItem("RecruiterToken");
  const isLoggedIn = useSelector(
    (state: RootState) => state.recruiterDetails.isLoggedIn
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>({
    resolver: yupResolver(userLoginValidationSchema),
  });
  const notify = (msg: string, type: string) => {
    type === "error"
      ? toast.error(msg, { position: toast.POSITION.TOP_RIGHT })
      : toast.success(msg, { position: toast.POSITION.TOP_RIGHT });
  };
  useEffect(() => {
    if (recruiterToken) {
      dispatch(recruiterLoginSuccess());
    }
    if (isLoggedIn === true) {
      navigate("/recruiter/dashboard");
    }
  });
  const submitHandler = async (formData: LoginPayload) => {
    recruiterLogin(formData)
      .then((response) => {
        const token = response.token;

        notify("Login success", "success");
        setTimeout(() => {
          dispatch(setRecruiterToken(token));
          dispatch(recruiterLoginSuccess());
          navigate("/employer/dashboard");
        }, 2000);
      })
      .catch((error: any) => {
        notify(error.message, "error");
      });
  };

  return (
    <>
      <div className=" flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(submitHandler)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-600"
                />
                {/* {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )} */}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                {/* <div className="text-sm">
                  <a
                    href="s"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  // {...register("password")}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-600"
                />
                {/* {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )} */}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link to={"/employer/register"}>
              <span className="font-semibold leading-6 text-black hover:text-gray-600">
                SignUp
              </span>
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default RecruiterLogin;
