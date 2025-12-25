import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import Footer from "../components/Footer/Footer.jsx";


export default function MainLayout() {
  return (
    <div className="min-h-screen flex">

      <Sidebar />

      
      <div className="flex flex-col flex-1 ml-64">

        <Navbar />

        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>

    
        <Footer />

      </div>
    </div>
  );
}
