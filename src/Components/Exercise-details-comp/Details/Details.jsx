import BodyPartImage from "../../../assets/icons/body-part.png";
import TargetImage from "../../../assets/icons/target.png";
import Equipment from "../../../assets/icons/equipment.png";

const Details = ({
  exercises: { bodyPart, equipment, gifUrl, name, target },
}) => {
  const ExtraDetails = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: Equipment,
      name: equipment,
    },
  ];
  return (
    <div className="exercise-wrapper">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="exercise-photo">
            <img src={gifUrl} alt="exercise-pic" />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="exercise-content">
            <div className="name text-capitalize">{name}</div>
            <p className="lead">
              Exercises keep you strong. <span>{name}</span> bup is one of the
              best exercises to target your {target} . It will help you improve
              your mood and gain energy.
            </p>
            <ul className="list-unstyled">
              {ExtraDetails.map((item, index) => {
                return (
                  <li className="mb-4 text-capitalize" key={index}>
                    <img src={item.icon} alt="pic" className="me-3" />{" "}
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
