import { LoaderIcon } from "lucide-react";

const Loader = () => (
  <div className=" absolute top-[50%] left-[50%] flex justify-center items-center z-20">
    <LoaderIcon className="animate-spin w-5 h-5" />
  </div>
);

export default Loader;
