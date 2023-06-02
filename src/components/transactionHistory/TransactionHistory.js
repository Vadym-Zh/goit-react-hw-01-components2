import PropTypes from 'prop-types';
import { TransactionHistoryItem } from './TransactionHistoryItem';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <div className={css.transactionWrap}>
      <h2 className={css.mainTitle}>4 - Історія транзакцій</h2>
      <table className={css.transaction}>
        <thead>
          <tr>
            <th className={css.tableHead}>Type</th>
            <th className={css.tableHead}>Amount</th>
            <th className={css.tableHead}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <TransactionHistoryItem key={item.id} data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
