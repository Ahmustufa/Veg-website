// import React from "react";
// import Helmet from "react-helmet";
// import { Link } from "react-router-dom";
// import "../ScreenStyles/Blog.css"
// export const Blog = () => {
//   return (
//     <>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>Blog</title>
//         <link rel="canonical" href="http://mysite.com/example" />
//       </Helmet>
//       <div className="bg-div mb-5">
//         <h1>Organi Shop</h1>
//         <Link to={"/"} className="bg-link">
//           Home - Blog
//         </Link>
//       </div>
//     </>
//   );
// };

import React,{useEffect,useState} from 'react'
import axios from "axios"
import BlogList from '../components/BlogList'
import Helmet from "react-helmet";
 import { Link } from "react-router-dom";
 import "../ScreenStyles/Blog.css"
const Blog = () => {

    const [posts, setposts] = useState([])

    useEffect(async() => {
        try {
            const res= await axios.get("https://jsonplaceholder.typicode.com/photos")
            setposts(res.data);
            console.log(res.data, "photos");    
        } catch (error) {
            console.log(error);
        }
        
    }, [])

    return (
        <>
         <div>
         <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
       <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
       <div className="bg-div mb-5">
        <h1>Organi Shop</h1>
        <Link to={"/"} className="bg-link">
          Home - Blog
       </Link>
     </div>
             <BlogList posts={posts} class />
         </div>
        </>
    )
}

export default Blog;
