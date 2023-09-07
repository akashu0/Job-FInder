import { Route, Routes } from "react-router-dom";
import UserLoginPage from "../../pages/user/UserLoginPage";

function UserRouter() {
  return (
    <Routes>
      <Route path="/login" element={<UserLoginPage />} />
    </Routes>
  );
}

export default UserRouter;
