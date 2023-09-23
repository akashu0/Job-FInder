import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import HomeRouter from "./routes/home/HomeRouter";
import UserRouter from "./routes/user/UserRouter";
import RecruiterRoutes from "./routes/recruiter/RecruiterRoutes";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/*" element={<HomeRouter />} />
          <Route path="/user/*" element={<UserRouter />} />
          <Route path="/recruiter/*" element={<RecruiterRoutes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
