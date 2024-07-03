const dataSet = {
  rounded: "rounded-lg",
  circle: "w-[400px] h-[400px] rounded-full",
  thumbnail: "border-4 border-white",
};

const Image = ({ src = "/paris.jpg", type = "thumbnail" }) => {
  let selectedType = dataSet[type];
  return <img src={src} alt={src} className={selectedType} />;
};

export default Image;
