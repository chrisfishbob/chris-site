import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, title, urlTitle, subtitle } = category;
  return (
    <Fragment>
      <Link to={urlTitle} className="category-container">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </Link>
    </Fragment>
  );
};

export default CategoryItem;
