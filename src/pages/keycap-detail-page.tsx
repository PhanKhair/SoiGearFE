import Breadcrumb from "@/components/globals/molecules/breadcrumb";
import ImageDetail from "@/components/locals/detail/img-detail";
import InformationDetail from "@/components/locals/detail/Info-detail";
import { sampleKeycapData } from "@/constants/data/keycap";
import { KeycapType } from "@/schemas/keycapSchema";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFoundPage from "./not-found-page";

function KeycapDetailPage() {
  const { keycapId } = useParams<{ keycapId: string }>();
  const [selectedColor, setSelectedColor] = useState<string>("");

  const keycap = sampleKeycapData.find(
    (keycaps: KeycapType) => keycaps.keycapId === keycapId,
  );

  const breadcrumb = [
    { title: "Home", href: "/home" },
    { title: "Keycaps", href: "/keycaps" },
    { title: keycap?.name ?? "" },
  ];

  useEffect(() => {
    if (keycap?.colors && keycap.colors.length > 0 && selectedColor === null) {
      setSelectedColor(keycap.colors[0]);
    }
  }, [keycap?.colors, selectedColor]);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  if (!keycap) return <NotFoundPage />;

  return (
    <div className="space-y-10">
      <Breadcrumb data={breadcrumb} />

      <div className="grid grid-cols-2 gap-10">
        <ImageDetail
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
      </div>
    </div>
  );
}

export default KeycapDetailPage;
