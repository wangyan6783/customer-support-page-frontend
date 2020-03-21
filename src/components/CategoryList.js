import React from "react";
import categoriesData from "../data/categories";
import Category from "./Category";

function CategoryList() {
  return (
    <section>
      <ul>
        {categoriesData.map(category => (
          <Category category={category} key={category.id} />
        ))}
      </ul>
    </section>
  );
}

export default CategoryList;
