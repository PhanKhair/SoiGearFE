import { Card } from "@/components/globals/atoms/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/globals/atoms/carousel";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import Autoplay from "embla-carousel-autoplay";

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

interface NavHomeProp {
  className?: string;
}

function NavHome({ className }: NavHomeProp) {
  const menuRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [navOpen, setNavOpen] = useState("");

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

  const handleOpen = (title: string) => {
    setNavOpen(title);
    setIsOpen(true);
  };

  const isMobile = window.innerWidth < 1280;

  return (
    <div className={className}>
      <div className="relative grid grid-cols-4 gap-10">
        <div className="col-span-4 space-y-8 xl:col-span-1" ref={menuRef}>
          {navItems.map(({ title, links }) => (
            <div
              key={title}
              className="relative flex items-center justify-between hover:cursor-pointer"
              onMouseEnter={!isMobile ? () => handleOpen(title) : undefined}
              onClick={isMobile ? () => handleOpen(title) : undefined}
              onMouseLeave={!isMobile ? () => setIsOpen(false) : undefined}
            >
              <p className="font-medium">{title}</p>
              <ChevronRight size={20} className="text-primary" />

              {/* MENU SUB */}
              {isOpen && navOpen === title && (
                <div className="absolute top-5 right-8 bottom-1 z-50 xl:top-0 xl:left-full">
                  <Card className="w-48 space-y-2 p-4">
                    {links.map((link) => (
                      <p
                        key={link.label}
                        className="hover:text-primary cursor-pointer text-sm hover:underline"
                      >
                        {link.label}
                      </p>
                    ))}
                  </Card>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="relative z-10 col-span-4 xl:col-span-3">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2200,
              }),
            ]}
          >
            <CarouselContent>
              {images.map((imageUrl, index) => (
                <CarouselItem key={index}>
                  <div className="flex h-[500px] items-center justify-center hover:cursor-pointer">
                    <img
                      src={imageUrl}
                      alt={`img-${index}`}
                      className="h-full w-full rounded-lg object-cover xl:object-fill"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default NavHome;
