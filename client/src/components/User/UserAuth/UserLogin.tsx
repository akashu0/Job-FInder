import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../features/redux/reducer/Reducer";
import { LoginPayload } from "../../../types/PayloadInterface";
import { userLoginValidationSchema } from "../../../util/validation";
import { loginSuccess } from "../../../features/redux/slice/user/userLoginAuthSlice";
import { userLogin } from "../../../features/axios/api/user/userAuthentication";
import { setToken } from "../../../features/redux/slice/user/tokenSlice";

function UserLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(
    (state: RootState) => state.userAuth.isLoggedIn
  );
  const token = localStorage.getItem("token");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>({
    resolver: yupResolver(userLoginValidationSchema),
  });

  const notify = (msg: string, type: string) =>
    type === "error"
      ? toast.error(msg, { position: toast.POSITION.TOP_RIGHT })
      : toast.success(msg, { position: toast.POSITION.TOP_RIGHT });

  useEffect(() => {
    if (token) {
      dispatch(loginSuccess());
    }
    if (isLoggedIn === true) {
      navigate("/user/dashboard");
    }
  }, [navigate]);

  const submitHandler = async (formData: LoginPayload) => {
    userLogin(formData)
      .then((response) => {
        const token = response.token;
        dispatch(setToken(token));
        dispatch(loginSuccess());

        notify("Login success", "success");
        setTimeout(() => {
          navigate("/user/dashboard");
        }, 2000);
      })
      .catch((error: any) => {
        notify(error.message, "error");
      });
  };

  return (
    <div className="flex justify-center h-screen bg-slate-200">
      {/* <div className="ml-32 flex justify-center items-center">
        <img
          src="https://www.foundit.in/rio/public/images/login-illustration.png"
          alt="Img"
          className="w-80"
        />
      </div> */}
      <div className="flex justify-center items-center  mt-6 sm:mx-auto sm:w-full sm:h-full">
        <div className="w-96 p-6 bg-white border border-gray-300 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
            <div>
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="text  "
                placeholder="Email"
                {...register("email")}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="text-sm" htmlFor="email">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-24 py-2 text-sm bg-black text-white rounded hover:bg-gray-900 flex justify-center items-center mx-auto"
            >
              Login
            </button>
          </form>
          <span className="mr-2 flex justify-center">or</span>
          {/* <div className="flex items-center justify-center mt-2">
            <GoogleAuthComponent/>
          </div> */}

          <div className="mt-4 text-center">
            <Link to={"/user/register"}>
              <span className="text-gray-500">
                Don't have an account?{" "}
                <p className="text-gray-800 underline">Sign up</p>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default UserLogin;
