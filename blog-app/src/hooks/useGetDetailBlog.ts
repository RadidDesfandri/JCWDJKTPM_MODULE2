import { axiosInstance } from "@/lib/axiosInstance";
import { AllBlogType } from "@/types/blog-type";
import { useQuery } from "@tanstack/react-query";

export const useGetDetailBlog = (objectId: string) => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const { data } = await axiosInstance.get<AllBlogType>(
        `/Blog/${objectId}`,
      );

      return data;
    },
  });
};
