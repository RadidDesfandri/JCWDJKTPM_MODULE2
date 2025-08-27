"use client";

import { useGetBlogs } from "@/hooks/useGetBlogs";
import { useState } from "react";
import BlogCard from "./BlogCard";

const ListBlog = () => {
  const [paging, setPaging] = useState<number>(0);
  const { data, isPending } = useGetBlogs({ page: 1, take: paging });

  if (isPending) {
    return <div className="py-20 text-center">Loading...</div>;
  }

  return (
    <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data?.map((item) => (
        <BlogCard
          key={item.objectId}
          author={item.author}
          category={item.category}
          created={item.created}
          description={item.description}
          objectId={item.objectId}
          thumbnail={item.thumbnail}
          title={item.title}
        />
      ))}

      <button onClick={() => setPaging(paging + 1)}>Clickme</button>
    </div>
  );
};

export default ListBlog;
