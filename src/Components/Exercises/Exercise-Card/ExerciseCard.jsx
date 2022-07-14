import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
const ExerciseCard = ({ exercise }) => {
  return (
    <div className="col-12 col-md-4">
      <div className="card-wrapper mb-3">
        <Link to={`/exercises/${exercise.id}`} className="text-decoration-none">
          <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
          <div className="exercise-title ms-2 my-2">
            <Button size="small" variant="contained" className="me-2" color="error">{exercise.bodyPart}</Button>
            <Button size="small" variant="contained" color="secondary">{exercise.target}</Button>
          </div>
          <div className="exercise-name ms-2 mt-3">{exercise.name}</div>
        </Link>
      </div>
    </div>
  );
};

export default ExerciseCard;
