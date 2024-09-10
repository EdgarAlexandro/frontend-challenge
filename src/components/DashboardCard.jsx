import PropTypes from 'prop-types';

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default function DashboardCard(props) {
  return (
    <div className='col-lg-4'>
      <div className='card text-center h-100'>
        <div className='card-body d-flex justify-content-between align-items-center'>
          <div className='text-start p-3'>
            <h5>{props.title}</h5>
            <div>{props.description}</div>
          </div>
          <div className='text-end p-3'>
            <p className='card-text'>{props.title === 'Total Revenue' ? `$${props.value}` : props.value}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
