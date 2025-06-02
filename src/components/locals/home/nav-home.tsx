import { Card } from "@/components/globals/atoms/card";

import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import EmblaCarousel from "@/components/globals/molecules/embla-carousel";
import { EmblaOptionsType } from "embla-carousel";

const navItems = [
  {
    title: "Keyboard",
    links: [
      { label: "Layout 60-65%", href: "/home" },
      { label: "Layout 75%", href: "/home" },
      { label: "Layout TKL", href: "/home" },
      { label: "Layout 98%", href: "/home" },
      { label: "Layout Alice", href: "/home" },
    ],
  },
  {
    title: "Keycap",
    links: [
      { label: "Profile Cherry", href: "/home" },
      { label: "Profile XDA", href: "/home" },
      { label: "Profile DDA", href: "/home" },
      { label: "Profile OEM", href: "/home" },
      { label: "Profile SA", href: "/home" },
      { label: "Profile DCS", href: "/home" },
    ],
  },
  {
    title: "Switch",
    links: [
      { label: "Switch Linear", href: "/home" },
      { label: "Switch Tactile", href: "/home" },
      { label: "Switch Clicky", href: "/home" },
      { label: "Switch Silent", href: "/home" },
    ],
  },
  {
    title: "Mouse",
    links: [
      { label: "Gaming mouse", href: "/home" },
      { label: "Office mouse", href: "/home" },
      { label: "Ergonomic Mouse", href: "/home" },
    ],
  },
  {
    title: "Groupbuy & IC",
    links: [
      { label: "IC (Interest check)", href: "/home" },
      { label: "Groupbuy F1 722", href: "/home" },
      { label: "Groupbuy Dune 65", href: "/home" },
      { label: "Groupbuy Zoom TKL", href: "/home" },
      { label: "Groupbuy Zoom 65 V3", href: "/home" },
    ],
  },
  {
    title: "Monitor",
    links: [
      { label: "24 inch", href: "/home" },
      { label: "27 inch", href: "/home" },
      { label: "32 inch", href: "/home" },
      { label: "34 inch", href: "/home" },
      { label: "40 inch", href: "/home" },
    ],
  },
  {
    title: "Accessory",
    links: [
      { label: "Lube oil", href: "/home" },
      { label: "Stabilizer", href: "/home" },
      { label: "Custom cable", href: "/home" },
      { label: "Deskmat", href: "/home" },
    ],
  },
  {
    title: "File & Resource",
    links: [
      { label: "User manual", href: "/home" },
      { label: "Software & Driver", href: "/home" },
      { label: "Soi build", href: "/home" },
    ],
  },
];

const images = [
  "//bizweb.dktcdn.net/100/438/322/themes/837712/assets/slider_2.jpg?1747295827492",
  "//bizweb.dktcdn.net/100/438/322/themes/837712/assets/slider_3.jpg?1747295827492",
  "//bizweb.dktcdn.net/100/438/322/themes/837712/assets/slider_4.jpg?1747295827492",
  "//bizweb.dktcdn.net/100/438/322/themes/837712/assets/slider_5.jpg?1747295827492",
  "//bizweb.dktcdn.net/100/438/322/themes/837712/assets/slider_6.jpg?1747295827492",
  "//bizweb.dktcdn.net/100/438/322/themes/837712/assets/slider_1.jpg?1747295827492",
];

const options: EmblaOptionsType = { loop: true };

interface NavHomeProp {
  className?: string;
}

function NavHome({ className }: NavHomeProp) {
  const menuRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [navOpen, setNavOpen] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const handleOpen = (title: string) => {
    setNavOpen(title);
    setIsOpen(true);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1280);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setNavOpen("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={className}>
      <div className="relative grid grid-cols-4 gap-10">
        <div className="col-span-4 space-y-4 xl:col-span-1" ref={menuRef}>
          {navItems.map(({ title, links }) => (
            <div
              key={title}
              className="relative transition-all duration-200 xl:ease-in-out xl:hover:z-60 xl:hover:scale-110"
              onMouseEnter={!isMobile ? () => handleOpen(title) : undefined}
              onClick={isMobile ? () => handleOpen(title) : undefined}
              onMouseLeave={!isMobile ? () => setIsOpen(false) : undefined}
            >
              <div className="relative z-10 flex items-center justify-between border-b pb-4 hover:cursor-pointer">
                <p className="font-medium">{title}</p>
                <ChevronRight size={20} className="text-primary" />
              </div>
              {/* MENU SUB */}
              {isOpen && navOpen === title && (
                <div className="absolute top-5 right-0 bottom-1 z-50 xl:top-0 xl:left-full">
                  <Card className="w-64 gap-2 space-y-0 px-4 py-2">
                    {links.map((link) => (
                      <span
                        key={link.label}
                        className="hover:text-primary hover:bg-secondary cursor-pointer rounded-lg px-4 py-2 text-sm underline-offset-2 transition-all ease-in-out hover:scale-105 hover:font-medium hover:underline"
                      >
                        {link.label}
                      </span>
                    ))}
                  </Card>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="relative z-10 col-span-4 xl:col-span-3">
          <EmblaCarousel
            slides={images}
            options={options}
            autoplayDelay={3000}
            stopOnInteraction={false}
          />
        </div>
      </div>
    </div>
  );
}

export default NavHome;
