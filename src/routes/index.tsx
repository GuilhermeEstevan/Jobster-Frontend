import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from "../pages/landing";
import Register from "../pages/register";
import {
  ProtectedRoute,
  Stats,
  AddJob,
  AllJobs,
  Profile,
  SharedLayout,
} from "../pages";

export const RoutesMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="/allJobs" element={<AllJobs />} />
          <Route path="/addJob" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element />
      </Routes>
    </BrowserRouter>
  );
};
