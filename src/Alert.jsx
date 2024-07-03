export const BasicAlert = ({ children = "Basic alert" }) => {
  return (
    <div className="bg-gray-100 relative p-4 rounded">
      <button className="w-8 h-8 rounded-full absolute top-0 right-0 text-black hover:text-red-400 duration-200">
        <i className="ri-close-line font-bold text-xl"></i>
      </button>
      <div>{children}</div>
    </div>
  );
};

export const GreenAlert = ({ children = "Green alert" }) => {
  return (
    <div className="bg-green-100 relative p-4 rounded">
      <button className="w-8 h-8 rounded-full absolute top-0 right-0 text-black hover:text-red-400 duration-200">
        <i className="ri-close-line font-bold text-xl"></i>
      </button>
      <div>{children}</div>
    </div>
  );
};

export const BlueAlert = ({ children = "Blue alert" }) => {
  return (
    <div className="bg-blue-100 relative p-4 rounded">
      <button className="w-8 h-8 rounded-full absolute top-0 right-0 text-black hover:text-red-400 duration-200">
        <i className="ri-close-line font-bold text-xl"></i>
      </button>
      <div>{children}</div>
    </div>
  );
};

export const RedAlert = ({ children = "Red alert" }) => {
  return (
    <div className="bg-rose-100 relative p-4 rounded">
      <button className="w-8 h-8 rounded-full absolute top-0 right-0 text-black hover:text-red-400 duration-200">
        <i className="ri-close-line font-bold text-xl"></i>
      </button>
      <div>{children}</div>
    </div>
  );
};
