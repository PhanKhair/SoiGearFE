import { Link, useLocation } from "react-router-dom";

import { Button } from "../atoms/button";
import { siteConfig } from "@/config/site";
import { Input } from "../atoms/input";
import {
  AlignJustify,
  BadgeInfo,
  CircleUser,
  Heart,
  LogOut,
  ReceiptText,
  Settings,
  ShoppingCart,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../atoms/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "../atoms/avatar";

function Header() {
  const { user, isAuthenticated, logout } = useAuth();

  const location = useLocation();

  return (
    <>
      <header className="flex items-center justify-between bg-white px-10 py-4 drop-shadow-sm xl:hidden">
        <Link
          to="/home"
          className="flex w-fit items-center gap-4 text-2xl font-bold text-black"
        >
          <img src="/images/keyboard.png" alt="asset" height={40} width={40} />
          <span className="text-primary">SoiGear</span>
        </Link>

        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <AlignJustify
              size={32}
              className="rounded-md border p-1 hover:cursor-pointer"
            />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              {siteConfig.navItems.map((navItem, index) => (
                <DropdownMenuItem key={index} className="hover:cursor-pointer">
                  <Link
                    to={navItem.href}
                    className={`slow font-medium duration-400 hover:text-gray-400 ${
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
                className="slow font-medium duration-400 hover:text-gray-400"
              >
                Login
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      <header className="hidden bg-white py-4 drop-shadow-sm xl:block">
        <div className="flex items-center justify-between px-36">
          <Link
            to="/home"
            className="flex items-center gap-4 text-2xl font-bold text-black"
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
                className={`slow font-medium duration-400 hover:text-gray-400 ${
                  location.pathname === navItem.href ? "underline" : ""
                }`}
              >
                {navItem.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <Input placeholder="What are you looking for?" size={25} />
            {isAuthenticated ? (
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-2 select-none hover:cursor-pointer">
                    <Avatar>
                      <AvatarImage src={user?.avatarUrl} alt="avatar" />
                      <AvatarFallback>{user?.fullName}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">
                      {user?.fullName}
                    </span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-52">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="hover:cursor-pointer">
                      Profile
                      <DropdownMenuShortcut>
                        <CircleUser />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:cursor-pointer">
                      Cart
                      <DropdownMenuShortcut>
                        <ShoppingCart />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:cursor-pointer">
                      Billing
                      <DropdownMenuShortcut>
                        <ReceiptText />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:cursor-pointer">
                      Settings
                      <DropdownMenuShortcut>
                        <Settings />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem className="hover:cursor-pointer">
                    Favorites
                    <DropdownMenuShortcut>
                      <Heart />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:cursor-pointer">
                    Support
                    <DropdownMenuShortcut>
                      <BadgeInfo />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    variant="destructive"
                    className="hover:cursor-pointer"
                    onClick={() => logout()}
                  >
                    Log out
                    <DropdownMenuShortcut>
                      <LogOut className="text-red-500" />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button type="button" variant="default">
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
