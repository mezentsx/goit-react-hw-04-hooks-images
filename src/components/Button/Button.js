import React from "react";
import s from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button ({ onLoadMore }) {
  return (
    <button className={s.Button} type="button" onClick={onLoadMore}>
      Load More
    </button>
  );
}

Button.propTypes = { onLoadMore: PropTypes.func.isRequired };
