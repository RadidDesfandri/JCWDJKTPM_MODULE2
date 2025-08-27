import DetailClient from "./components/DetailClient";

const BlogDetail = ({ params }: { params: { id: string } }) => {
  return <DetailClient id={params.id} />;
};

export default BlogDetail;
