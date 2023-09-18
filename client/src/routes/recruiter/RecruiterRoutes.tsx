import { Route, Routes } from "react-router-dom";

import React from "react";
import RecruiterLoginPage from "../../pages/recruiter/RecruiterLoginPage";

function RecruiterRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<RecruiterLoginPage />} />
    </Routes>
  );
}

export default RecruiterRoutes;
