import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function LoadingPage() {
  return (
    <div className="relative mx-auto flex w-full items-center justify-center">
      <DotLottieReact
        src="/assets/loading.json"
        loop
        autoplay
        className="h-[500px] w-[800px]"
      />
      <p className="text-primary absolute bottom-1 text-2xl font-medium">
        Loading ...
      </p>
    </div>
  );
}

export default LoadingPage;
