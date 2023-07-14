import React from "react";
import ExternalLayout from "./pages/layouts/ExternalLayout";
import InternalLayout from "./pages/layouts/InternalLayout";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Applicants from "./pages/applicants/Applicants";
import Clients from "./pages/clients/Clients";
import Posts from "./pages/posts/Posts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExternalLayout />} />
      <Route path="admin/dashboard" element={<Dashboard />}></Route>
      <Route path="admin/clients" element={<Clients />}></Route>
      <Route path="admin/applicants" element={<Applicants />}></Route>
      <Route path="admin/posts" element={<Posts />}></Route>
      <Route element={<InternalLayout />}>
        {/* <Route path="admin/dashboard" element={user}></Route> */}
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
