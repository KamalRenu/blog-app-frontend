import React, { useState } from "react";
import classes from "./NewPost.module.css";
import axios from "axios";

const NewPost = () => {
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    picture: "",
    categories:[],
    name: "",
    success:true
  });
  const { title, description, picture, categories, name } = postData;

  const handleInputChange = (name) => (event) => {
    setPostData({ ...postData, [name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("https://blog-app-mern-api.herokuapp.com/api/post/create", {
        title,
        description,
        picture,
        categories,
        name,
        success: true
      });
      if (res.data.error) {
        setPostData({ ...postData, error: res.data.error });
        return;
      }
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.signup__contaier}>
      <span className={classes.signup__title}>Create Post</span>
      <form className={classes.signup__form} onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className={classes.signup__input}
          type="text"
          placeholder="Title..."
          onChange={handleInputChange("title")}
        />

        <label>Description</label>
        <input
          className={classes.signup__input}
          type="text"
          placeholder="Description..."
          onChange={handleInputChange("description")}
        />

        <label>Picture Url</label>
        <input
          className={classes.signup__input}
          type="text"
          placeholder="Past Url..."
          onChange={handleInputChange("picture")}
        />

        <label>Category</label>
        <input
          className={classes.signup__input}
          type="text"
          placeholder="category..."
          onChange={handleInputChange("categories")}
        />

        <label>Name</label>
        <input
          className={classes.signup__input}
          type="text"
          placeholder="Authorname..."
          onChange={handleInputChange("name")}
        />

        <button className={classes.signup__button} type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default NewPost;