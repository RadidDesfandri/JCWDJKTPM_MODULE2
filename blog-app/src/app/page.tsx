import LayoutConfig from "@/components/LayoutConfig";
import Jumbotron from "./_components/Jumbotron";
import ListBlog from "./_components/ListBlog";
import { Metadata } from "next";
import { fetchBlogs } from "@/services/blogs";

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchBlogs({ page: 2, take: 0 });

  return {
    title: data[1].title,
    description: data[0].description,
  };
}

export default async function Home() {
  return (
    <LayoutConfig className="py-5 md:py-10">
      <Jumbotron />
      <ListBlog />
    </LayoutConfig>
  );
}
