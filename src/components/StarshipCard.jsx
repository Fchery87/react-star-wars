import { useState } from 'react';
import PropTypes from 'prop-types';
import { RiArrowDropDownLine } from 'react-icons/ri';

function StarshipCard({ starship }) {

  // state to keep track if the card is open or not
  const [isOpen, setIsOpen] = useState(false);

  // function to toggle the open state
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="starship-card">
      <h2>{starship.name}</h2>
      {isOpen && (
        <div className="starship-details">
          <p><strong>Model:</strong> {starship.model}</p>
          <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
          <p><strong>Cost:</strong> {starship.cost_in_credits} credits</p>
        </div>
      )}
      <div className="icon-container" onClick={toggleOpen}>
        <RiArrowDropDownLine className={`dropdown-icon ${isOpen ? 'open' : ''}`} />
      </div>
    </div>
  );
}

// PropTypes to make sure we're getting the right props
StarshipCard.propTypes = {
  starship: PropTypes.shape({
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    cost_in_credits: PropTypes.string.isRequired,
  }).isRequired,
};

export default StarshipCard;
