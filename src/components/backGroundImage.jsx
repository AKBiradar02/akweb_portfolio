import bgimg from "/images/bgimg.jpg";
const BgImage = () => {
  return (
    <div
      className="fixed inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgimg})` }}
    />
  );
};

export default BgImage;
