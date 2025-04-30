const BgImage = () => {
  return (
    <div
      className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('./images/bgimg.jpg')" }}
    />
  );
};

export default BgImage;
