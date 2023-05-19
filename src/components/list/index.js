import React from "react";
import PropTypes from "prop-types";
import Item from "../item";
import "./style.css";

function List({ list, onAddItem, showPrice, btnName }) {
  return (
    <div className="List">
      {list.map((item) => (
        <div key={item.code} className="List-item">
          <Item
            item={item}
            onAddItem={onAddItem}
            showPrice={showPrice}
            btnName={btnName}
          />
        </div>
      ))}
    </div>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
    })
  ).isRequired,
  onAddItem: PropTypes.func,
  // onSelectItem: PropTypes.func
};

List.defaultProps = {
  onAddItem: () => {},
  // onSelectItem: () => {},
};

export default React.memo(List);
