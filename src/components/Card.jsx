import PropTypes from 'prop-types';
import '../_cards.scss';

function Card({ children, photo }) {
  return (
    <div className="card">
      {photo && (
        <div className="card__photo">
          <img src={photo} loading="lazy" />
        </div>
      )}
      <div className="card__body">{children}</div>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  photo: PropTypes.string,
};

export default Card;
