import PropTypes from 'prop-types';
import '../_card-button.scss';

function CardButton({ children, onAddWorkFlow }) {
  return (
    <button onClick={onAddWorkFlow} className="card" type="button">
      <span className="card-body">{children}</span>
    </button>
  );
}

CardButton.propTypes = {
  children: PropTypes.node,
  onAddWorkFlow: PropTypes.func,
};

export default CardButton;
