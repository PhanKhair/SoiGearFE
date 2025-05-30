import Breadcrumb from "@/components/globals/molecules/breadcrumb";
import ImageDetail from "@/components/locals/detail/img-detail";
import InformationDetail from "@/components/locals/detail/Info-detail";
import { sampleKeyboardData } from "@/constants/data/keyboard";
import { KeyboardType } from "@/schemas/keyboardSchema";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function KeyboardDetailPage() {
  const { keyboardId } = useParams<{ keyboardId: string }>();
  const [selectedColor, setSelectedColor] = useState<string>("");

  const keyboard = sampleKeyboardData.find(
    (keyboards: KeyboardType) => keyboards.keyboardId === keyboardId,
  );

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
      </div>
    </div>
  );
}

export default KeyboardDetailPage;
