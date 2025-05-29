import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/globals/atoms/carousel";
import { Dialog, DialogContent } from "@/components/globals/atoms/dialog";
import { useState } from "react";

interface imageDetailProps {
  className?: string;
  images: string[];
}

function ImageDetail({ className, images }: imageDetailProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={className}>
        <div className="flex max-h-[500px] w-full flex-col items-center justify-center gap-4 xl:hidden">
          <div className="h-full w-full">
            <img
              src={images[selectedIndex]}
              alt="Main product"
              className="max-h-[300px] w-full rounded-lg border object-cover hover:cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          </div>

          <div className="max-h-[500px] w-full">
            <Carousel orientation="horizontal" className="w-fit">
              <CarouselContent className="w-fit">
                {images.map((img, index) => (
                  <CarouselItem
                    key={index}
                    className="mr-1 flex max-w-fit items-center justify-center"
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index}`}
                      onClick={() => setSelectedIndex(index)}
                      className={`max-h-[60px] w-fit cursor-pointer rounded-sm border-[2px] object-cover duration-200 select-none md:max-h-[100px] ${
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
          <div className="flex max-h-[500px] w-full items-center gap-4">
            {/* Sidebar Carousel */}
            <div className="max-h-[500px] w-1/5">
              <Carousel orientation="vertical" className="max-h-[400px] w-full">
                <CarouselContent className="max-h-[400px]">
                  {images.map((img, index) => (
                    <CarouselItem key={index} className="py-1">
                      <img
                        src={img}
                        alt={`Thumbnail ${index}`}
                        onClick={() => setSelectedIndex(index)}
                        className={`mt-3 max-h-[80px] w-full cursor-pointer rounded-sm border-[2px] object-cover transition-all duration-200 select-none ${
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
            <div className="h-full w-4/5">
              <img
                src={images[selectedIndex]}
                alt="Main product"
                className="max-h-[400px] w-full rounded-lg border object-cover hover:cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-[300px] md:max-w-[600px] xl:max-w-[700px]">
          <img
            src={images[selectedIndex]}
            alt="Main product"
            className="mt-5 max-h-[600px] w-full max-w-[800px] rounded-lg border object-fill xl:max-h-[620px]"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ImageDetail;
