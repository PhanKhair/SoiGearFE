import { Link, useLocation } from "react-router-dom";

import { Button } from "../atoms/button";
import { siteConfig } from "@/config/site";
import { Input } from "../atoms/input";
import { AlignJustify } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../atoms/dropdown-menu";

function Header() {
  const location = useLocation();

  return (
    <>
      <header className="xl:hidden bg-white py-4 drop-shadow-sm flex items-center px-10 justify-between">
        <Link
          to="/home"
          className="text-2xl font-bold text-black flex items-center gap-4 w-fit"
        >
          <img src="/images/keyboard.png" alt="asset" height={40} width={40} />
          <span className="text-primary">SoiGear</span>
        </Link>

        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <AlignJustify
              size={32}
              className="rounded-md p-1 border hover:cursor-pointer"
            />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              {siteConfig.navItems.map((navItem, index) => (
                <DropdownMenuItem key={index} className="hover:cursor-pointer">
                  <Link
                    to={navItem.href}
                    className={`slow font-medium hover:text-gray-400 duration-400 ${
                      location.pathname === navItem.href ? "underline" : ""
                    }`}
                  >
                    {navItem.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:cursor-pointer">
              <Link
                to="/login"
                className="slow font-medium hover:text-gray-400 duration-400"
              >
                Login
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      <header className="hidden xl:block bg-white py-4 drop-shadow-sm">
        <div className="px-52 flex items-center justify-between">
          <Link
            to="/home"
            className="text-2xl font-bold text-black flex items-center gap-4"
          >
            <img
              src="/images/keyboard.png"
              alt="asset"
              height={40}
              width={40}
            />
            <span className="text-primary">SoiGear</span>
          </Link>

          <div className="flex items-center space-x-10">
            {siteConfig.navItems.map((navItem, index) => (
              <Link
                key={index}
                to={navItem.href}
                className={`slow font-medium hover:text-gray-400 duration-400 ${
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
    </>
  );
}

export default Header;
