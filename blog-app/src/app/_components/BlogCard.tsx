"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { AllBlogType } from "@/types/blog-type";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BlogCard = ({
  author,
  category,
  created,
  description,
  objectId,
  thumbnail,
  title,
}: AllBlogType) => {
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push(`/detail/${objectId}`)}
      className="cursor-pointer overflow-hidden rounded-sm p-0 pb-6 transition-all duration-300 hover:scale-[101%]"
    >
      <Image
        src={thumbnail}
        alt="Blog Thumbnail"
        width={600}
        height={600}
        priority
        className="h-52 object-cover"
      />
      <CardContent className="space-y-3">
        <div className="flex justify-between text-xs">
          <span className="block text-purple-600">
            {category} &bull; {formatDate(created)}
          </span>
          <p className="text-neutral-800">{author}</p>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-4">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
