import LayoutConfig from "@/components/LayoutConfig";
import Jumbotron from "./_components/Jumbotron";
import ListBlog from "./_components/ListBlog";

export default function Home() {
  return (
    <LayoutConfig className="py-5 md:py-10">
      <Jumbotron />
      <ListBlog />
    </LayoutConfig>
  );
}
