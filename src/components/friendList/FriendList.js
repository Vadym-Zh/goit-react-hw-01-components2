import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <div className={css.friendsWrap}>
      <h2 className={css.mainTitle}>3 - Список друзів</h2>
      <section className={css.friends}>
        <ul className={css.friends}>
          {friends.map(friend => (
            <FriendListItem key={friend.id} data={friend} />
          ))}
        </ul>
      </section>
    </div>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
