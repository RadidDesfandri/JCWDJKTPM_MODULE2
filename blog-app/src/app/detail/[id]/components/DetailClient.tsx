"use client";

import { useGetDetailBlog } from "@/hooks/useGetDetailBlog";

const DetailClient = ({ id }: { id: string }) => {
  const { data } = useGetDetailBlog(id);

  if (data) {
    return <div>{data.title}</div>;
  }
};

export default DetailClient;
