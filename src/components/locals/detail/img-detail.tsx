import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/globals/atoms/carousel";
import { Dialog, DialogContent } from "@/components/globals/atoms/dialog";
import { ImagesProductType } from "@/schemas/keyboardSchema";
import { useEffect, useState } from "react";

interface ImageDetailProps {
  color?: string;
  images: ImagesProductType[];
  className?: string;
}

function ImageDetail({ color, images, className }: ImageDetailProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [horizontalApi, setHorizontalApi] = useState<CarouselApi>();
  const [verticalApi, setVerticalApi] = useState<CarouselApi>();

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (color) {
      const foundIndex = images.findIndex((item) => item.color === color);
      if (foundIndex !== -1) {
        setSelectedIndex(foundIndex);

        if (horizontalApi) {
          horizontalApi.scrollTo(foundIndex);
        }
        if (verticalApi) {
          verticalApi?.scrollTo(foundIndex);
        }
      }
    }

    if (color === "") {
      setSelectedIndex(0);

      if (horizontalApi) {
        horizontalApi.scrollTo(0);
      }
      if (verticalApi) {
        verticalApi?.scrollTo(0);
      }
    }
  }, [color, images, horizontalApi, verticalApi]);

  const filteredImageUrls: string[] = images.map((item) => item.img);

  return (
    <>
      <div
        className={`flex max-h-[600px] w-full flex-col items-center justify-center gap-4 xl:hidden ${className ?? ""}`}
      >
        <div className="h-full w-full">
          <img
            src={filteredImageUrls[selectedIndex]}
            alt="Main product"
            className="h-[350px] w-full rounded-lg border object-fill hover:cursor-pointer md:h-[500px]"
            onClick={() => setIsOpen(true)}
          />
        </div>

        <div className="max-h-[600px] w-full">
          <Carousel
            orientation="horizontal"
            className="w-fit"
            setApi={setHorizontalApi}
          >
            <CarouselContent className="w-fit">
              {filteredImageUrls.map((img, index) => (
                <CarouselItem
                  key={index}
                  className="mr-1 flex max-w-fit items-center justify-center"
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index}`}
                    onClick={() => setSelectedIndex(index)}
                    className={`ml-1 h-[90px] w-[90px] cursor-pointer rounded-sm border-[2px] object-cover duration-200 select-none md:h-[130px] md:w-[130px] ${
                      selectedIndex === index
                        ? "border-o-primary"
                        : "border-secondary"
                    }`}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <div className="hidden xl:block">
        <div className="flex max-h-[600px] w-full items-center gap-4">
          {/* Sidebar Carousel */}
          <div className="max-h-[600px] w-1/7">
            <Carousel
              orientation="vertical"
              className="max-h-[540px] w-full"
              setApi={setVerticalApi}
            >
              <CarouselContent className="max-h-[550px]">
                {filteredImageUrls.map((img, index) => (
                  <CarouselItem key={index} className="py-1">
                    <img
                      src={img}
                      alt={`Thumbnail ${index}`}
                      onClick={() => setSelectedIndex(index)}
                      className={`mt-4 h-[80px] w-full cursor-pointer rounded-sm border-[2px] object-cover transition-all duration-200 select-none ${
                        selectedIndex === index
                          ? "border-o-primary"
                          : "border-secondary"
                      }`}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Main Image */}
          <div className="h-full w-6/7">
            <img
              src={filteredImageUrls[selectedIndex]}
              alt="Main product"
              className="h-[550px] w-full rounded-lg border object-cover select-none hover:cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="flex min-w-[300px] justify-center md:min-w-[600px] xl:min-h-[600px] xl:min-w-[720px]">
          <img
            src={filteredImageUrls[selectedIndex]}
            alt="Main product"
            className="mt-5 max-h-[600px] w-full max-w-[700px] rounded-lg border object-fill xl:max-h-[580px] xl:min-h-[500px]"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ImageDetail;
