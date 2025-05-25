import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/Home";
import LoginPage from "@/pages/Login";
import RegisterPage from "@/pages/Register";
import ProfilePage from "@/pages/Profile";
import UsersPage from "@/pages/Admin/users";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/admin/users" element={<UsersPage />} />
    </Routes>
  );
};

export default AppRoutes;
