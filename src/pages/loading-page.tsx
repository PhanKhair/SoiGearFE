import ClipLoader from "react-spinners/ClipLoader";

function LoadingPage() {
  return (
    <div className="mx-auto flex min-h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <ClipLoader
          className="text-primary"
          loading={true}
          size={100}
          cssOverride={{
            borderWidth: "4px",
          }}
        />
        <p className="text-primary">Loading ...</p>
      </div>
    </div>
  );
}

export default LoadingPage;
