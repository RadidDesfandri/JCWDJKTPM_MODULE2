"use client";

import BlogCard from "./BlogCard";

const ListBlog = () => {
  return (
    <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default ListBlog;
