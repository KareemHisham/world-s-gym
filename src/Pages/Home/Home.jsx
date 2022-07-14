import "./Home.css";
import {
  HeroBanner,
  SearchExercise,
  Exercises,
} from "../../Components/CompContainer";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <HeroBanner />
        <SearchExercise />
        <Exercises />
      </div>
    </section>
  );
};

export default Home;
