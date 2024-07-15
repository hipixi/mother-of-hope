const Dialog = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative w-full  h-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
