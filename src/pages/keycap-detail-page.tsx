import Breadcrumb from "@/components/globals/molecules/breadcrumb";
import ImageDetail from "@/components/locals/detail/img-detail";
import InformationDetail from "@/components/locals/detail/Info-detail";
import { sampleKeycapData } from "@/constants/data/keycap";
import { KeycapType } from "@/schemas/keycapSchema";
import { useState } from "react";
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
import KeycapCard from "@/components/globals/molecules/keycap-card";

function KeycapDetailPage() {
  const { keycapId } = useParams<{ keycapId: string }>();
  const [selectedColor, setSelectedColor] = useState<string>("");

  const keycap = sampleKeycapData.find(
    (keycaps: KeycapType) => keycaps.keycapId === keycapId,
  );
  const otherKeycaps = sampleKeycapData.filter(
    (keycap: KeycapType) => keycap.keycapId !== keycapId,
  );

  const overviewReviewData = sampleOverviewReviewData;
  const reviewData = sampleReviewProductData;

  const breadcrumb = [
    { title: "Home", href: "/home" },
    { title: "Keycaps", href: "/keycaps" },
    { title: keycap?.name ?? "" },
  ];

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  if (!keycap) return <NotFoundPage />;

  return (
    <div className="space-y-10">
      <Breadcrumb data={breadcrumb} />

      <div className="grid grid-cols-2 gap-10">
        <ImageDetail
          color={selectedColor}
          images={keycap?.images ?? []}
          className="col-span-2 xl:col-span-1"
        />

        <InformationDetail
          variant="keycap"
          keycap={keycap}
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
            {otherKeycaps.map((product, index) => (
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

export default KeycapDetailPage;
