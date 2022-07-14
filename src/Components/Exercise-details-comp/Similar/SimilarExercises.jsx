import { Slider, Spinner } from "../../CompContainer";
const SimilarExercises = ({ equipment, targetMuscle }) => {
  return (
    <div className="similar-exercise">
      <div className="similar-target mb-4">
        <div className="head mb-3">
          <h5 className="mb-3 text-capitalize">
            similar <span>Target Muscle</span> exercises
          </h5>
        </div>
        {!targetMuscle.length ? <Spinner /> : <Slider data={targetMuscle} />}
      </div>
      <div className="similar-muscles">
        <div className="head mb-3">
          <h5 className="mb-3 text-capitalize">
            similar <span>equipment</span> exercises
          </h5>
        </div>
        {!equipment.length ? <Spinner /> : <Slider data={equipment} />}
      </div>
    </div>
  );
};

export default SimilarExercises;
