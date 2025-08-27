import { axiosInstance } from "@/lib/axiosInstance";
import { AllBlogType } from "@/types/blog-type";

export const fetchBlogs = async ({
  page,
  take,
}: {
  page: number;
  take: number;
}) => {
  const { data } = await axiosInstance.get<AllBlogType[]>(
    `/Blog?pageSize=${page}&offset=${take}`,
  );

  return data;
};
