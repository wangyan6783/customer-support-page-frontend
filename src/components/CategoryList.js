import React from "react";
import CategoryItem from "./CategoryItem";

function CategoryList({ categoriesData }) {
  return (
    <section>
      <ul className="category-list">
        {categoriesData.map(category => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </ul>
    </section>
  );
}

export default CategoryList;
