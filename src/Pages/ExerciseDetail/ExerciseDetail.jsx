import "./ExerciseDetail.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Details,
  SimilarExercises,
  Vidoes,
} from "../../Components/CompContainer";
import { useStateContext } from "../../Context/ContextAPI";
import {
  FetchURL,
  ExercisesOptions,
  YoutubeOptions,
} from "../../Context/URLData";
const ExerciseDetail = () => {
  const [exercises, setExercises] = useState({});
  const [youtubeVideos, setYoutubeVideos] = useState({});
  const [equipment, setEquipment] = useState([]);
  const [targetMuscle, setTargetMuscle] = useState([]);
  const { fetchData } = useStateContext();
  const { exerciseID } = useParams();

  // Use Effect
  useEffect(() => {
    const YoutubeURL = "https://youtube-search-and-download.p.rapidapi.com";

    // Fetching Function
    const FetchingExerData = async () => {
      // Fetching Exercise Per ID
      const FetchExercise = await fetchData(
        `${FetchURL}/exercise/${exerciseID}`,
        ExercisesOptions
      );
      setExercises(FetchExercise);

      // Fetching YoutubeVideos
      const FetchYoutubVideos = await fetchData(
        `${YoutubeURL}/search?query=${FetchExercise.name}`,
        YoutubeOptions
      );
      setYoutubeVideos(FetchYoutubVideos);

      // Fetching Equipment
      const FetchEquipmentData = await fetchData(
        `${FetchURL}/equipment/${FetchExercise.equipment}`,
        ExercisesOptions
      );
      setEquipment(FetchEquipmentData);

      // Fetching Target Muscle
      const FetchMusclesData = await fetchData(
        `${FetchURL}/target/${FetchExercise.target}`,
        ExercisesOptions
      );

      setTargetMuscle(FetchMusclesData);
    };

    FetchingExerData();
  }, [exerciseID, fetchData]);
  return (
    <section className="exercise-details">
      <div className="container">
        <Details exercises={exercises} />
        <Vidoes youtubeVideos={youtubeVideos} name={exercises.name} />
        <SimilarExercises equipment={equipment} targetMuscle={targetMuscle} />
      </div>
    </section>
  );
};

export default ExerciseDetail;
