import { capitalize } from '../shared/utils';

const AvailablePlant = props => {
  // TODO #11: Destructure additional props to receive handlers from Main
  let { name, color, image, numAvailable } = props.plant;

  // TODO #20: Add conditional unavailable class when no more plants available to allocate
  return (
    <div className="card available-plant-card">
      <div className="img-txt-combo">
        <img src={image} width="50px" height="50px" alt={`${color} ${name}`} />
        <p>
          {name}, {capitalize(color)}
          <br />
          <span className="amount-txt">{numAvailable} available</span>
        </p>
      </div>
      <div className="arrow-group">
        <i
          className="chevron-left fa fa-chevron-circle-left"
          title="Remove one plant from flowerbed"></i>
        <i
          className="chevron-right fa fa-chevron-circle-right"
          title="Add one plant to flowerbed"></i>
      </div>
    </div>
  );
};

export default AvailablePlant;
