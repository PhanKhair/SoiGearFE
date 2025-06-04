import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function LoadingPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <DotLottieReact
        src="/assets/loading.json"
        loop
        autoplay
        className="h-[550px] w-[1000px]"
      />
      <p className="text-primary text-2xl font-medium">Loading ...</p>
    </div>
  );
}

export default LoadingPage;
