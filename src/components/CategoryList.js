import React, { useState, useEffect } from "react";
import categoriesData from "../data/categories";
import Category from "./Category";

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  return (
    <section>
      {categories.map(category => (
        <Category category={category} key={category.id} />
      ))}
    </section>
  );
}

export default CategoryList;
