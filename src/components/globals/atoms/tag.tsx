import { ChevronsRight } from "lucide-react";
import { useState } from "react";

interface tagProps {
  variant?: "default" | "more";
  label: string;
}

function Tag({ variant = "default", label }: tagProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="bg-o-primary h-10 w-6 rounded-sm border"></div>

        <p className="text-o-primary text-xl font-bold">{label}</p>
      </div>

      {variant === "more" && (
        <div
          className="flex items-center text-gray-400 hover:cursor-pointer"
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          <p className="text-sm hover:underline">Read more</p>
          {isVisible && <ChevronsRight size={15} />}
        </div>
      )}
    </div>
  );
}

export default Tag;
