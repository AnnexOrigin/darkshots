import React from "react";
import ExternalLayout from "./pages/layouts/ExternalLayout";
import InternalLayout from "./pages/layouts/InternalLayout";
import Login from "./pages/external/login/Index";
import Register from "./pages/external/register/Index";
import { Routes, Route } from "react-router-dom";
import AccountSettings from "./pages/accountSettings/AccountSettings";
import Applicants from "./pages/applicants/Applicants";
import Clients from "./pages/clients/Clients";
import Posts from "./pages/posts/Posts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExternalLayout />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<InternalLayout />}>
        <Route
          path="admin/accountSettings"
          element={<AccountSettings />}
        ></Route>
        <Route path="admin/clients" element={<Clients />}></Route>
        <Route path="admin/applicants" element={<Applicants />}></Route>
        <Route path="admin/posts" element={<Posts />}></Route>
        {/* <Route path="admin/dashboard" element={user}></Route> */}
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
