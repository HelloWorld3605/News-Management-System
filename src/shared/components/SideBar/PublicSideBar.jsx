import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoryService from "../../services/categoryService.js";
import "./PublicSideBar.css";

const PublicSideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoryService
      .getActiveCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <aside className="public-sidebar responsive-wrapper">
      <div className="public-sidebar-header">
        <h3>Thể loại</h3>
      </div>
      <ul className="public-sidebar-list">
        {categories.map((cat) => (
          <li className="public-sidebar-item" key={cat.CategoryID}>
            <Link to={cat.Path} className="public-sidebar-item-title">
              {cat.CategoryName}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default PublicSideBar;
