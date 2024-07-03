const dataSet = {
  red: "bg-red-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
};

const Jumbotron = ({ children = "Your Content Here", color = "blue" }) => {
  let selectedColor = dataSet[color];

  return <div className={`p-8 rounded ${selectedColor}`}>{children}</div>;
};
export default Jumbotron;
