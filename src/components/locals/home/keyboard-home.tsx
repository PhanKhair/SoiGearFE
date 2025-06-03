import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/globals/atoms/carousel";
import Tag from "@/components/globals/atoms/tag";
import KeyboardCard from "@/components/globals/molecules/keyboard-card";
import { sampleKeyboardData } from "@/constants/data/keyboard";
import Autoplay from "embla-carousel-autoplay";

interface KeyboardHomeProps {
  className?: string;
}

function KeyboardHome({ className }: KeyboardHomeProps) {
  const data = sampleKeyboardData;

  return (
    <div className={`space-y-6 ${className ?? ""}`}>
      <Tag label="Keyboard's" variant="more" />
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
              <KeyboardCard data={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default KeyboardHome;
