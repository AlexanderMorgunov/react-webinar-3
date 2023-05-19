import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function Controls({ onAdd, title, setIsOpen, isOpen }) {
  return (
    <div className="Controls">
      {/* <button onClick={() => onAdd()}>{title}</button> */}
      {setIsOpen ? (
        <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
      ) : (
        <button onClick={() => onAdd()}>{title}</button>
      )}
    </div>
  );
}

Controls.propTypes = {
  onAdd: PropTypes.func,
  onForward: PropTypes.func,
  onClose: PropTypes.func,
};

Controls.defaultProps = {
  onAdd: () => {},
  onForward: () => {},
  onClose: () => {},
};

export default React.memo(Controls);
