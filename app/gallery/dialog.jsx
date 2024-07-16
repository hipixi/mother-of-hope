import { X } from "lucide-react";

const Dialog = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur">
      <div className="relative w-full  h-full">
        <button
          onClick={onClose}
          className="absolute lg:bg-gray-950 rounded-full p-2 top-4 right-4 text-white text-2xl"
        >
          <X className="w-5 h-5" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
