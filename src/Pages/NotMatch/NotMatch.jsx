import "./NotMatch.css";
import GoldGym from "../../assets/images/Logo-1.png";
const NotMatch = () => {
  return (
    <section className="page-not-found">
      <img src={GoldGym} alt="golds" className="mb-3" />
      <h3>Sorry, The page is not found</h3>
    </section>
  );
};

export default NotMatch;
