import PropTypes from 'prop-types';
import React from 'react';

function Qoutes({ data, loading, error }) {
  if (loading) return <div> Loading.... </div>;
  if (error) return <div> Something went wrong, please try again </div>;
  return (
    <main className="quote">
      {data.map((item) => (
        <div key={item.category}>
          <h2>
            &quot;
            {item.quote}
            &quot;
          </h2>
          <small>
            {' '}
            {item.author}
            {' '}
          </small>
        </div>
      ))}
    </main>
  );
}

Qoutes.propTypes = {
  data: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default Qoutes;
