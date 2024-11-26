const Loader = ({ text }: { text?: string }) => {
  return (
    <div className="flex justify-center items-center h-96">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
        <span className="mt-4 text-lg">{text || "Loading..."}</span>
      </div>
    </div>
  );
};

export default Loader;
