import ImageDetail from "@/components/locals/detail/img-detail";
import InformationDetail from "@/components/locals/detail/Info-detail";
import { sampleKeyboardData } from "@/constants/data/keyboard";
import { KeyboardType } from "@/schemas/keyboardSchema";
import { useParams } from "react-router-dom";

function KeyboardDetailPage() {
  const { keyboardId } = useParams<{ keyboardId: string }>();

  const keyboard = sampleKeyboardData.find(
    (keyboards: KeyboardType) => keyboards.keyboardId === keyboardId,
  );

  return (
    <div className="grid grid-cols-2 gap-10">
      <ImageDetail
        images={keyboard?.images ?? []}
        className="col-span-2 xl:col-span-1"
      />

      <InformationDetail
        keyboard={keyboard}
        className="col-span-2 xl:col-span-1"
      />
    </div>
  );
}

export default KeyboardDetailPage;
