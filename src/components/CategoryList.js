import React from "react";
import categoriesData from "../data/categories";
import CategoryItem from "./CategoryItem";

function CategoryList() {
  return (
    <section className="padding-tb-xxlarge">
      <ul className="category-list">
        {categoriesData.map(category => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </ul>
    </section>
  );
}

export default CategoryList;
