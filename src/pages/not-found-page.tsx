import { Button } from "@/components/globals/atoms/button";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-20">
      <img src="/images/not-found.png" alt="not-found" className="h-80 w-80" />

      <div className="space-y-4 text-center">
        <p className="text-primary text-2xl font-bold uppercase">
          Looks like you lost your way home
        </p>
        <Button
          size="lg"
          className="hover:cursor-pointer"
          onClick={() => navigate(-1)}
        >
          Take me back
        </Button>
      </div>
    </div>
  );
}

export default NotFoundPage;
