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

function CategoryItem({ category: { name, description, icon } }) {
  return (
    <li className="category-item">
      <div className="category-item-icon-wrapper">
        <FontAwesomeIcon icon={icon} className="category-item-icon" />
      </div>
      <div>
        <h4 className="category-item-title">{name}</h4>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default CategoryItem;
