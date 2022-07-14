import "./Exercises.css";
import Pagination from "@mui/material/Pagination";
import { useState, useRef } from "react";
import { useStateContext } from "../../Context/ContextAPI";
import { ExerciseCard } from "../CompContainer";

const Exercises = () => {
  const { exercises } = useStateContext();
  // Pagination Options & Functions
  const [currentPage, setCurrentPage] = useState(1);
  const myExercises = useRef(null);
  const exercisesPerPage = 6;
  const IndexOfLastExercise = currentPage * exercisesPerPage;
  const IndexOfFirstExercise = IndexOfLastExercise - exercisesPerPage;
  const CurrentExercises = exercises.slice(
    IndexOfFirstExercise,
    IndexOfLastExercise
  );
  // HandelChange Function
  const handleChange = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: myExercises.current.offsetTop, behavior: "smooth" });
  };
  return (
    <>
      {exercises.length > 0 && (
        <section className="exercises" ref={myExercises}>
          <div className="heading text-capitalize text-center mb-5">
            show results
          </div>
          <div className="row">
            {CurrentExercises.map((exercise, index) => (
              <ExerciseCard exercise={exercise} key={index} />
            ))}
          </div>
          {exercises.length > exercisesPerPage && (
            <Pagination
              count={Math.ceil(exercises.length / exercisesPerPage)}
              color="error"
              onChange={handleChange}
              page={currentPage}
            />
          )}
        </section>
      )}
    </>
  );
};

export default Exercises;
