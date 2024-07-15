const { Loader2 } = require("lucide-react");

const Spinner = () => {
  return (
    <div className="flex justify-center text-gray-600 items-center min-h-screen">
      <Loader2 className="animate-spin md:w-32 md:h-32 w-24 h-24" />
    </div>
  );
};

export default Spinner;
