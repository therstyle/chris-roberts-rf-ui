import PropTypes from 'prop-types';
import '../_cards.scss';

function Card({ children, photo, onClick }) {
  return (
    <button className="card" onClick={onClick}>
      {photo && (
        <div className="card__photo">
          <img src={photo} loading="lazy" />
        </div>
      )}
      <div className="card__body">{children}</div>
    </button>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  photo: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
