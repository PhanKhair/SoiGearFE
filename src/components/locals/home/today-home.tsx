import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/globals/atoms/carousel";
import Tag from "@/components/globals/atoms/tag";
import ProductCard from "@/components/globals/molecules/product-card";
import { sampleProductSale } from "@/constants/datas/product-sales";
import Autoplay from "embla-carousel-autoplay";

interface todayHomeProps {
  className?: string;
}

function TodayHome({ className }: todayHomeProps) {
  const data = sampleProductSale;

  return (
    <div className={className}>
      <div className="space-y-6">
        <Tag label="Today's" />
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
                className="basis-1/2 md:basis-1/3 xl:basis-1/5"
              >
                <ProductCard data={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default TodayHome;
