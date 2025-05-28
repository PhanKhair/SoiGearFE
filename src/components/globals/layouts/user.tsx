import { Outlet } from "react-router-dom";
import Header from "../organisms/header";
import Footer from "../organisms/footer";

function UserLayout() {
  return (
    <div className="flex flex-col relative min-h-screen">
      <Header />
      <div className="min-h-[600px] py-10 px-10 xl:px-52">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default UserLayout;
