import Breadcrumb from "@/components/globals/molecules/breadcrumb";
import ImageDetail from "@/components/locals/detail/img-detail";
import InformationDetail from "@/components/locals/detail/Info-detail";
import { sampleKeyboardData } from "@/constants/data/keyboard";
import { KeyboardType } from "@/schemas/keyboardSchema";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFoundPage from "./not-found-page";
import ReviewDetail from "@/components/locals/detail/review-detail";
import { sampleOverviewReviewData } from "@/constants/data/overview-review";
import { sampleReviewProductData } from "@/constants/data/product-review";
import Tag from "@/components/globals/atoms/tag";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/globals/atoms/carousel";
import KeyboardCard from "@/components/globals/molecules/keyboard-card";

function KeyboardDetailPage() {
  const { keyboardId } = useParams<{ keyboardId: string }>();
  const [selectedColor, setSelectedColor] = useState<string>("");

  const keyboard = sampleKeyboardData.find(
    (keyboards: KeyboardType) => keyboards.keyboardId === keyboardId,
  );
  const otherKeyboards = sampleKeyboardData.filter(
    (keyboard: KeyboardType) => keyboard.keyboardId !== keyboardId,
  );

  const overviewReviewData = sampleOverviewReviewData;
  const reviewData = sampleReviewProductData;

  const breadcrumb = [
    { title: "Home", href: "/home" },
    { title: "Keyboards", href: "/keyboards" },
    { title: keyboard?.name ?? "" },
  ];

  useEffect(() => {
    if (
      keyboard?.colors &&
      keyboard.colors.length > 0 &&
      selectedColor === null
    ) {
      setSelectedColor(keyboard.colors[0]);
    }
  }, [keyboard?.colors, selectedColor]);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  if (!keyboard) return <NotFoundPage />;

  return (
    <div className="space-y-10">
      <Breadcrumb data={breadcrumb} />

      <div className="grid grid-cols-2 gap-10">
        <ImageDetail
          images={keyboard?.images ?? []}
          className="col-span-2 xl:col-span-1"
        />

        <InformationDetail
          variant="keyboard"
          keyboard={keyboard}
          className="col-span-2 xl:col-span-1"
          selectedColor={selectedColor}
          onColorChange={handleColorChange}
        />

        <ReviewDetail
          overview={overviewReviewData}
          review={reviewData}
          className="col-span-2"
        />
      </div>

      <div className="space-y-6">
        <Tag label="Related product" variant="more" />
        <Carousel className="w-full">
          <CarouselContent>
            {otherKeyboards.map((product, index) => (
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
    </div>
  );
}

export default KeyboardDetailPage;
