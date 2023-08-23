import React from "react";
import { Route, Routes } from "react-router-dom";
import Accounts from "./pages/accounts/Index";
import Applicants from "./pages/applicants/Index";
import Clients from "./pages/clients/Index";
import Login from "./pages/external/login/Index";
import Register from "./pages/external/register/Index";
import ExternalLayout from "./pages/layouts/ExternalLayout";
import InternalLayout from "./pages/layouts/InternalLayout";
import Posts from "./pages/posts/Index";
import Test from "./pages/test/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExternalLayout />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<InternalLayout />}>
        <Route path="admin/accounts" element={<Accounts />}></Route>
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
