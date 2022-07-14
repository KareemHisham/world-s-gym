import { createContext, useContext, useEffect, useState } from "react";
import { FetchURL, BodyPartsURL, ExercisesOptions } from "./URLData";
export const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  // Variables
  const [search, setSearch] = useState(""),
    [exercises, setExercises] = useState([]),
    [allBodyParts, setAllBodyParts] = useState([]);

  // Fetching Data Main Function
  const fetchData = async (api, option) => {
    const response = await fetch(api, option);
    const data = await response.json();
    return data;
  };

  // HandleSearch Function
  const handleSearch = async (e) => {
    e.preventDefault();
    if (search) {
      try {
        const ExercisesData = await fetchData(FetchURL, ExercisesOptions);
        const SearchedExercises = ExercisesData.filter((exercise) => {
          return (
            exercise.name.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search)
          );
        });
        setSearch("");
        setExercises(SearchedExercises);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Fetch Exercise depend on part name
  const FetchBodyPartCard = async (variable) => {
    let myExercisesData = [];
    if (variable === "all") {
      myExercisesData = await fetchData(FetchURL, ExercisesOptions);
    } else {
      myExercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${variable}`,
        ExercisesOptions
      );
    }
    setExercises(myExercisesData);
  };

  // Fetch All body parts Function
  const fetchBodyPart = async () => {
    const BodyParts = await fetch(BodyPartsURL, ExercisesOptions);
    const BodyPartsRes = await BodyParts.json();
    setAllBodyParts(["all", ...BodyPartsRes]);
  };
  // UseEffect
  useEffect(() => {
    fetchBodyPart();
    FetchBodyPartCard();
  }, []);

  return (
    <StateContext.Provider
      value={{
        search,
        setSearch,
        handleSearch,
        allBodyParts,
        setAllBodyParts,
        exercises,
        setExercises,
        fetchData,
        FetchBodyPartCard
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
