import PropTypes from 'prop-types';
import '../_cards.scss';

function Card({ children }) {
  return (
    <div className="card">
      <div className="card__body">{children}</div>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
