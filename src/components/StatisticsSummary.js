import React from 'react';
import PropTypes from 'prop-types';

const StatisticCard = ({ icon, label, value, color }) => (
  <div style={{ textAlign: 'center', color }}>
    <div style={{ fontSize: '24px', marginBottom: '5px' }}>{icon}</div>
    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{value}</div>
    <div>{label}</div>
  </div>
);

StatisticCard.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  color: PropTypes.string,
};

const StatisticsSummary = ({ data }) => (
  <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', backgroundColor: '#f6f8fc' }}>
    {data.map((item, index) => (
      <StatisticCard key={index} icon={item.icon} label={item.label} value={item.value} color={item.color} />
    ))}
  </div>
);

StatisticsSummary.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      color: PropTypes.string,
    })
  ).isRequired,
};

export default StatisticsSummary;
