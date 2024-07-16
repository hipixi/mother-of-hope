const { Loader2 } = require("lucide-react");

const Spinner = () => {
  return (
    <div className="flex justify-center text-gray-600 items-center min-h-screen">
      <Loader2 className="animate-spin md:w-24 md:h-24 w-16 h-16" />
    </div>
  );
};

export default Spinner;
