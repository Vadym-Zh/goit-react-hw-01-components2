import PropTypes from 'prop-types';

import css from './Statistics.module.css';

export const StatisticsItem = ({ data: { label, percentage } }) => {
  return (
    <li className={`${css.item} ${css[label]}`}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
