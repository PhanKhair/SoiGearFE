import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/globals/atoms/carousel";
import { Dialog, DialogContent } from "@/components/globals/atoms/dialog";
import { useState } from "react";

interface ImageDetailProps {
  className?: string;
  images: string[];
}

function ImageDetail({ className, images }: ImageDetailProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={className}>
        <div className="flex max-h-[600px] w-full flex-col items-center justify-center gap-4 xl:hidden">
          <div className="h-full w-full">
            <img
              src={images[selectedIndex]}
              alt="Main product"
              className="h-[350px] w-full rounded-lg border object-fill hover:cursor-pointer md:h-[500px]"
              onClick={() => setIsOpen(true)}
            />
          </div>

          <div className="max-h-[600px] w-full">
            <Carousel orientation="horizontal" className="w-fit">
              <CarouselContent className="w-fit">
                {images.map((img, index) => (
                  <CarouselItem
                    key={index}
                    className="mr-[5px] flex max-w-fit items-center justify-center"
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index}`}
                      onClick={() => setSelectedIndex(index)}
                      className={`h-[80px] w-[80px] cursor-pointer rounded-sm border-[2px] object-cover duration-200 select-none md:h-[120px] md:w-[120px] ${
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
              <Carousel orientation="vertical" className="max-h-[540px] w-full">
                <CarouselContent className="max-h-[550px]">
                  {images.map((img, index) => (
                    <CarouselItem key={index} className="py-1">
                      <img
                        src={img}
                        alt={`Thumbnail ${index}`}
                        onClick={() => setSelectedIndex(index)}
                        className={`mt-3 h-[80px] w-full cursor-pointer rounded-sm border-[2px] object-cover transition-all duration-200 select-none ${
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
                src={images[selectedIndex]}
                alt="Main product"
                className="h-[550px] w-full rounded-lg border object-cover hover:cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="flex min-w-[300px] justify-center md:min-w-[600px] xl:min-h-[600px] xl:min-w-[720px]">
          <img
            src={images[selectedIndex]}
            alt="Main product"
            className="mt-5 max-h-[600px] w-full max-w-[700px] rounded-lg border object-fill xl:max-h-[580px] xl:min-h-[500px]"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ImageDetail;
