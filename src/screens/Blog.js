import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import "../ScreenStyles/Blog.css"
export const Blog = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="bg-div mb-5">
        <h1>Organi Shop</h1>
        <Link to={"/"} className="bg-link">
          Home - Contact Us
        </Link>
      </div>
    </>
  );
};
