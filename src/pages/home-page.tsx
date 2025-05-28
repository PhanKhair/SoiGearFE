import NavHome from "@/components/locals/home/nav-home";
import TodayHome from "@/components/locals/home/today-home";

function HomePage() {
  return (
    <div className="space-y-10">
      <NavHome />

      <TodayHome />
    </div>
  );
}

export default HomePage;
