import { Card } from "@/components/globals/atoms/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/globals/atoms/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Instagram, Linkedin, Twitter } from "lucide-react";

interface DeveloperAboutProps {
  className?: string;
}

const site = [
  {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image: "/public/images/TomCruise.png",
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    image: "/public/images/EmmaWatson.png",
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    image: "/public/images/WillSmith.png",
  },

  {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image: "/public/images/TomCruise.png",
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    image: "/public/images/EmmaWatson.png",
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    image: "/public/images/WillSmith.png",
  },

  {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image: "/public/images/TomCruise.png",
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    image: "/public/images/EmmaWatson.png",
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    image: "/public/images/WillSmith.png",
  },
];

function DeveloperAbout({ className }: DeveloperAboutProps) {
  return (
    <div className={className}>
      <div>
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-20">
            {site.map((user, index) => (
              <CarouselItem
                key={index}
                className="basis-1/1 pl-20 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="gap-0 px-6">
                  <img
                    src={user.image}
                    alt={`user ${index}`}
                    className="bg-secondary h-80 rounded-sm object-fill px-20 pt-4 select-none"
                  />

                  <p className="mt-4 text-3xl font-medium">{user.name}</p>
                  <p className="text-sm">{user.role}</p>

                  <div className="mt-4 flex items-center gap-2">
                    <Twitter
                      strokeWidth={1.5}
                      size={20}
                      className="hover:text-o-primary text-primary duration-500 hover:cursor-pointer"
                    />
                    <Instagram
                      strokeWidth={1.5}
                      size={20}
                      className="hover:text-o-primary text-primary duration-500 hover:cursor-pointer"
                    />
                    <Linkedin
                      strokeWidth={1.5}
                      size={20}
                      className="hover:text-o-primary text-primary duration-500 hover:cursor-pointer"
                    />
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default DeveloperAbout;
