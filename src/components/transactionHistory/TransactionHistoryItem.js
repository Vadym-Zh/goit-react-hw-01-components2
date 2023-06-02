import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistoryItem = ({
  data: { type, amount, currency },
}) => {
  return (
    <tr className={css.tableRow}>
      <td className={css.tableCell}>{type}</td>
      <td className={css.tableCell}>{amount}</td>
      <td className={css.tableCell}>{currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
