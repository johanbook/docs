import imageUrl from "./images/hero.png";

const Hero = () => {
  return (
    <img
      style={{ borderRadius: "10px", marginBottom: "15px" }}
      src={imageUrl}
    />
  );
};

export default Hero;
