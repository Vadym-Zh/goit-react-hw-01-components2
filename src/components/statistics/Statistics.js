import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <div className={css.statisticsWrap}>
      <h2 className={css.mainTitle}>2- Секція статистики</h2>
      <section className={css.statistics}>
        {title && <h3 className={css.title}>{title}</h3>}
        <ul className={css.statisticsList}>
          {stats.map(stat => (
            <StatisticsItem key={stat.id} data={stat} />
          ))}
        </ul>
      </section>
    </div>
  );
};
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
