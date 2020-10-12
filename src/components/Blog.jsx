import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const blogPosts = [
  {
    title: "Blog post #1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Blog post #2",
    content: "Maecenas consequat sagittis orci quis accumsan.",
  },
  {
    title: "Blog post #3",
    content:
      "Curabitur fringilla, risus dignissim egestas elementum, leo sapien pretium est, quis imperdiet eros orci et ligula.",
  },
];

const Blog = (props) => {
  const { url } = useRouteMatch();
  return (
    <>
      <h1>This is the blog</h1>
      <nav>
        {blogPosts.map((post, index) => (
          <Link to={`${url}${index}`} key={index}>
            {post.title}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Blog;
