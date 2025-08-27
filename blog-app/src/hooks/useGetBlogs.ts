import { fetchBlogs } from "@/services/blogs";
import { useQuery } from "@tanstack/react-query";

export const useGetBlogs = ({ page, take }: { page: number; take: number }) => {
  return useQuery({
    queryKey: ["blogs", page, take],
    queryFn: async () => {
      const data = fetchBlogs({ page, take });

      return data;
    },
  });
};
