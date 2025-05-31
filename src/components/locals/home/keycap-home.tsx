import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/globals/atoms/carousel";
import Tag from "@/components/globals/atoms/tag";
import KeycapCard from "@/components/globals/molecules/keycap-card";
import { sampleKeycapData } from "@/constants/data/keycap";
import Autoplay from "embla-carousel-autoplay";

interface KeycapHomeProps {
  className?: string;
}

function KeycapHome({ className }: KeycapHomeProps) {
  const data = sampleKeycapData;

  return (
    <div className={className}>
      <div className="space-y-6">
        <Tag label="Keycap's" variant="more" />
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {data.map((product, index) => (
              <CarouselItem
                key={index}
                className="basis-1/1 md:basis-1/3 xl:basis-1/5"
              >
                <KeycapCard data={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default KeycapHome;
