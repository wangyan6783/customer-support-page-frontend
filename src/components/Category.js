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
  faQuestionCircle,
  faPlus,
  faMinus
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faShoppingCart,
  faTruck,
  faFileAlt,
  faUser,
  faTag,
  faCheckCircle,
  faQuestionCircle,
  faPlus,
  faMinus
);

function Category({ category: { name, description, icon } }) {
  return (
    <li>
      <FontAwesomeIcon icon={icon} />
      <h4>{name}</h4>
      <p>{description}</p>
    </li>
  );
}

export default Category;
