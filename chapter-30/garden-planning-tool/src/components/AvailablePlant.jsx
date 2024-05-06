// TODO #1: Import capitalize function from utils

const AvailablePlant = props => {

  // TODO #1: Include image property and remove id (when no longer needed)
  let { id, name, color, numAvailable } = props.plant;

  // TODO #1: Replace simple text with a card containing image, text, and arrow icons as buttons

  return (
    <p id={id}>
      {name} - {color} - {numAvailable} available
    </p>
  );
};

export default AvailablePlant;
