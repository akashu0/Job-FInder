import { Route, Routes } from "react-router-dom";
import UserLoginPage from "../../pages/user/UserLoginPage";
import UserRegisterPage from "../../pages/user/UserRegisterPage";
import UserHomePage from "../../pages/user/UserHomePage";

function UserRouter() {
  return (
    <Routes>
      <Route path="/login" element={<UserLoginPage />} />
      <Route path="/register-user" element={<UserRegisterPage />} />
      <Route path="/home" element={<UserHomePage />} />
    </Routes>
  );
}

export default UserRouter;
