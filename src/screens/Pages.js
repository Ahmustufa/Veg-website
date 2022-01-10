import React from "react";
import { Helmet } from "react-helmet";

const Pages = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pages</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>Pages</div>
    </>
  );
};

export default Pages;
