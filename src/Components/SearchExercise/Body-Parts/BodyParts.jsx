import gymImg from "../../../assets/icons/gym.png";
import { useStateContext } from "../../../Context/ContextAPI";

const BodyParts = ({ part }) => {
  const { FetchBodyPartCard } = useStateContext();
  return (
    <button
      className="parts-wrapper btn"
      key={part}
      itemID={part}
      title={part}
      onClick={() => {
        FetchBodyPartCard(part);
      }}
    >
      <img src={gymImg} alt="gym-logo" />
      <div className="title">{part}</div>
    </button>
  );
};

export default BodyParts;
