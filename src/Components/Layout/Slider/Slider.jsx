import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import usePreventBodyScroll from "./usePreventBodyScroll";
import "./hideScrollbar.css";
import { useContext } from "react";
import { BodyParts, ExerciseCard } from "../../CompContainer";
// import { useStateContext } from "../../../Context/ContextAPI";
const Slider = ({ isBodyPart, data }) => {
  // const { allBodyParts } = useStateContext();
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  // Left Arrow Function
  function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

    return (
      <ArrowCircleLeftIcon
        disabled={isFirstItemVisible}
        onClick={() => scrollPrev()}
        className="right-arrow"
      />
    );
  }
  // Right Arrow Function
  function RightArrow() {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

    return (
      <ArrowCircleRightIcon
        disabled={isLastItemVisible}
        onClick={() => scrollNext()}
        className="leftArrow"
      />
    );
  }
  return (
    <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((part, indx) => {
          return isBodyPart ? (
            <BodyParts part={part} key={part} />
          ) : (
            <ExerciseCard exercise={part} key={indx} />
          );
        })}
      </ScrollMenu>
    </div>
  );
};

export default Slider;
