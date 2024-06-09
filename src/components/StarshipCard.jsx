import PropTypes from 'prop-types';

function StarshipCard({ starship }) {
  return (
    <div className="starship-card">
      <h2>{starship.name}</h2>
    </div>
  );
}

StarshipCard.propTypes = {
  starship: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default StarshipCard;
