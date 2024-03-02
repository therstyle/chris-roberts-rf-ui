import PropTypes from 'prop-types';
import '../_cards.scss';

function CardButton({ children, onAddWorkFlow }) {
  return (
    <button onClick={onAddWorkFlow} className="card" type="button">
      <span className="card__body">{children}</span>
    </button>
  );
}

CardButton.propTypes = {
  children: PropTypes.node,
  onAddWorkFlow: PropTypes.func,
};

export default CardButton;
