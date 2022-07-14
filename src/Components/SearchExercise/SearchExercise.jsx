import "./SearchExercise.css";
import TextField from "@mui/material/TextField";
import "./SearchExercise.css"
import Button from "@mui/material/Button";
import { useStateContext } from "../../Context/ContextAPI";
import { Slider } from "../CompContainer";
const SearchExercise = () => {
  const { search, setSearch, handleSearch, allBodyParts } = useStateContext();
  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };
  return (
    <section className="search-form">
      <div className="heading text-capitalize">
        awesome exercises you <br /> should know
      </div>
      <form onSubmit={handleSearch}>
        <div className="input-group">
          <TextField
            label="Search for Exercise..."
            size="small"
            value={search}
            onChange={handleChange}
          />
          <Button variant="outlined" color="error" type="submit">
            Search
          </Button>
        </div>
      </form>
      <Slider isBodyPart data={allBodyParts} />
    </section>
  );
};

export default SearchExercise;
