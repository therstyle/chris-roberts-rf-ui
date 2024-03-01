import PropTypes from 'prop-types';
import '../_card-button.scss';

function CardButton({ children }) {
  return (
    <button className="card" type="button">
      <span className="card-body">{children}</span>
    </button>
  );
}

CardButton.propTypes = {
  children: PropTypes.node,
};

export default CardButton;
