import React, { useState, useEffect } from "react";
import classes from "./SideBar.module.css";
import { aboutMeImg, aboutMeContent } from "../../constants/constants";
import { Link } from "react-router-dom";
import axios from "axios";
const SideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("https://blog-app-mern-api.herokuapp.com/api/category/");
      setCategories(res.data);
    };
    getCategories();
  }, []);
  return (
    <div className={classes.sidebar__container}>
      <div className={classes.sidebar__item}>
        <span className={classes.sidebar__title}>ABOUT ME</span>
        <img src={aboutMeImg} alt="aboutMe" />
        <p>{aboutMeContent}</p>
      </div>
      <div className={classes.sidebar__item}>
        <span className={classes.sidebar__title}>CATEGORIES</span>
        <ul className={classes.sidebar__list}>
          {categories.map((ele, index) => (
            <Link
              to={`/?cat=${ele.name}`}
              className={classes.sidebar__list__item}
              key={index}
            >
              {ele.name}
            </Link>
          ))}
        </ul>
      </div>
      <div className={classes.sidebar__item}>
        <span className={classes.sidebar__title}>FOLLOW US</span>
      </div>
    </div>
  );
};

export default SideBar;