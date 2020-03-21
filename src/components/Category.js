import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faTruck,
  faFileAlt,
  faUser,
  faTag,
  faCheckCircle,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faShoppingCart,
  faTruck,
  faFileAlt,
  faUser,
  faTag,
  faCheckCircle,
  faQuestionCircle
);

function Category({ category: { name, description, icon } }) {
  return (
    <div>
      <FontAwesomeIcon icon={icon} />
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Category;
