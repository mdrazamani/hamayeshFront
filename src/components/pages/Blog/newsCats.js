import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const CategoryItem = ({ category, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChildren = () => {
        setIsOpen(!isOpen);
    };

    const buttonStyle = isOpen
        ? {
              color: "white",
              backgroundColor: "rgb(206, 20, 70)",
              borderColor: "rgb(206, 20, 70)",
          }
        : {};

    const childrenCountStyle = {
        display: "inline-block",
        width: "20px",
        height: "20px",
        lineHeight: "20px",
        borderRadius: "50%",
        backgroundColor: "rgb(206, 20, 70)",
        color: "white",
        textAlign: "center",
        fontSize: "0.8rem",
        marginLeft: "5px",
    };

    return (
        <li>
            <div className="category-item" style={buttonStyle}>
                <Link to={"news/category/" + category.slug} style={buttonStyle}>
                    {category.title}
                </Link>
                {category.children && category.children.length > 0 && (
                    <button onClick={toggleChildren}>
                        <i
                            className={
                                isOpen
                                    ? "bi bi-chevron-up"
                                    : "bi bi-chevron-down"
                            }
                        />
                        <span style={childrenCountStyle}>
                            {category.children.length}
                        </span>
                    </button>
                )}
            </div>
            {isOpen && category.children && (
                <ul
                    className="category-children"
                    style={{ marginRight: `${index * 20}px` }}
                >
                    {category.children.map((child, childIndex) => (
                        <CategoryItem
                            key={childIndex}
                            category={child}
                            index={index + 1}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
};

const NewsCategories = ({ newsCats }) => {
    return (
        <ul>
            {newsCats.map((cat, index) => (
                <CategoryItem key={index} category={cat} index={1} />
            ))}
        </ul>
    );
};

export default NewsCategories;
