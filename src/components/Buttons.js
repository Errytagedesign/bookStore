import React from 'react';
import PropTypes from 'prop-types';

function Buttons({ title, className, handleEvent }) {
  return (
    <button
      type="button"
      value={title}
      onClick={handleEvent}
      className={className}
    >
      {title}
    </button>
  );
}

Buttons.propTypes = {
  title: PropTypes.string.isRequired,
  handleEvent: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Buttons.defaultProps = {
  className: '',
};
export default Buttons;
