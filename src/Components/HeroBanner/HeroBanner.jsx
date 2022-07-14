import "./HeroBanner.css";
import Button from "@mui/material/Button";
import heroBanner from "../../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h5 className="text-capitalize head">fitness club</h5>
        <p>
          Sweat,Smile <br /> and Repeat
        </p>
        <span>Check out the most effective exercises </span>
        <Button variant="outlined" color="error" className="text-capitalize">
          explore exercises
        </Button>
        <h1 className="text-capitalize">exercises</h1>
      </div>
      <img src={heroBanner} alt="Banner" />
    </section>
  );
};

export default HeroBanner;
