const dataSet = {
  red: "bg-red-400",
  blue: "bg-blue-400",
  green: "bg-green-400",
};

const Progress = ({ value = 50, color = "green" }) => {
  let selectedColor = dataSet[color];

  return (
    <div className="bg-gray-100 rounded-lg">
      <div
        className={`${selectedColor} text-sm rounded-lg text-white font-semibold text-center shadow-xl`}
        style={{ width: `${value}%` }}
      >
        {value}%
      </div>
    </div>
  );
};

export default Progress;
