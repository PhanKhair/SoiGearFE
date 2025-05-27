import { Link, useLocation } from "react-router-dom";

import { Button } from "../atoms/button";
import { siteConfig } from "@/config/site";
import { Input } from "../atoms/input";

function Header() {
  const location = useLocation();

  return (
    <header className="sticky-nav relative bg-white py-4 drop-shadow-sm">
      <div className="px-52 flex items-center justify-between">
        <Link
          to="/home"
          className="text-2xl font-bold text-black flex items-center gap-4"
        >
          <img src="/images/keyboard.png" alt="asset" height={40} width={40} />
          <span className="text-primary">SoiGear</span>
        </Link>

        <div className="flex items-center space-x-10 ">
          {siteConfig.navItems.map((navItem, index) => (
            <Link
              key={index}
              to={navItem.href}
              className={`slow relative font-medium hover:text-gray-400 duration-400 ${
                location.pathname === navItem.href ? "underline" : ""
              }`}
            >
              {navItem.label}
            </Link>
          ))}
        </div>

        <div className="flex gap-4">
          <Input placeholder="What are you looking for?" size={25} />

          <Link to="/login">
            <Button type="button" variant="default">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
