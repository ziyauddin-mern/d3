export const BasicButton = ({ children = "Basic Button" }) => {
  return (
    <button className="px-8 w-fit font-semibold py-3 hover:bg-gray-200 rounded duration-300">
      {children}
    </button>
  );
};

export const BlueButton = ({ children = "Blue Button" }) => {
  return (
    <button className="px-8 w-fit font-semibold py-3 hover:bg-blue-700 rounded bg-blue-500 text-white duration-300">
      {children}
    </button>
  );
};

export const GreenButton = ({ children = "Green Button" }) => {
  return (
    <button className="px-8 w-fit font-semibold py-3 hover:bg-green-700 rounded bg-green-500 text-white duration-300">
      {children}
    </button>
  );
};

export const RedButton = ({ children = "Red Button" }) => {
  return (
    <button className="px-8 w-fit font-semibold py-3 hover:bg-red-700 rounded bg-red-500 text-white duration-300">
      {children}
    </button>
  );
};

export const OutlineButton = ({ children = "Outline Button" }) => {
  return (
    <button className="px-8 w-fit font-semibold py-3 border hover:bg-gray-200 rounded border-amber-600 duration-300 text-amber-500">
      {children}
    </button>
  );
};

export const DarkButton = ({ children = "Dark Button" }) => {
  return (
    <button className="px-8 w-fit font-semibold py-3 border rounded duration-300 text-white bg-zinc-800 hover:bg-zinc-600">
      {children}
    </button>
  );
};
