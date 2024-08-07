import { Outlet } from "react-router-dom";
import SideBar from "../ui/Sidebar";
import Header from "../ui/Header";

function AppLayout() {
  return (
    <div className="h-screen bg-stone-200">
      <Header />
      <div className="sm:grid sm:grid-cols-12 md:mx-24 mt-6 gap-4">
        <SideBar />
        <main className="col-span-9 bg-blue-300">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
