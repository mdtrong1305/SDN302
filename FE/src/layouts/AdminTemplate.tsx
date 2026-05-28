import { Outlet } from "react-router-dom";

export default function AdminTemplate() {
  return (
    <div className="admin-layout min-h-screen bg-gray-100">
      <Outlet />
    </div>
  );
}
