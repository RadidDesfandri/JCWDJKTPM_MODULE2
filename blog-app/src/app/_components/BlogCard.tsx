"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BlogCard = () => {
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push(`/detail/id`)}
      className="cursor-pointer overflow-hidden rounded-sm p-0 pb-6 transition-all duration-300 hover:scale-[101%]"
    >
      <Image
        src="https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
        alt="Blog Thumbnail"
        width={600}
        height={600}
        priority
        className="h-52 object-cover"
      />
      <CardContent className="space-y-3">
        <div className="flex justify-between text-xs">
          <span className="block text-purple-600">
            Programming &bull; 26 Agu 2025
          </span>
          <p className="text-neutral-800">Radid Desfandri</p>
        </div>
        <CardTitle>Belajar Nextjs Untuk Pemula</CardTitle>
        <CardDescription className="line-clamp-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          nostrum qui voluptatibus quae architecto perspiciatis labore et
          voluptatem, nam cum quam exercitationem itaque omnis placeat minima
          eligendi, fugiat nulla. Esse?
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
