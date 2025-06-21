import bgimg from "/images/bgimg.jpg";
const BgImage = () => {
  return (
    <div
      className="fixed inset-0 bg-cover bg-center bg-no-repeat z-[-1]"
      style={{ backgroundImage: `url(${bgimg})` }}
    />
  );
};

export default BgImage;
