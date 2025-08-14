import CardTodo from "@/components/CardTodo";
import Filter from "@/components/Filter";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <Image
        src="/Bitmap.png"
        alt="Bitmap"
        width={1000}
        height={400}
        className="min-h-52 w-full object-cover"
      />

      {/* Todo Content */}
      <div className="absolute top-10 left-1/2 w-full max-w-2xl -translate-x-1/2 transform px-5">
        <Header />

        <div className="mt-9 flex flex-col gap-5">
          <div className="relative">
            <div className="absolute top-1/2 left-5 h-4 w-4 -translate-y-1/2 transform rounded-full border-2 border-[#E3E4F1] p-3 dark:border-[#393A4B]" />
            <input
              type="text"
              placeholder="Create a new todo..."
              className="w-full rounded-md bg-white py-4 pl-16 outline-none dark:bg-[#25273D]"
            />
          </div>

          <div className="flex flex-col rounded-md bg-white shadow-md dark:bg-[#25273D]">
            <CardTodo />
            <CardTodo />
            <CardTodo />
            <CardTodo />
            <div className="flex items-center justify-between px-5 py-4">
              <p>5 Item Left</p>
              <Filter />
              <p>Clear Completed</p>
            </div>
          </div>

          <Filter withBackground />
        </div>
        <p className="mt-10 text-center">Drag and drop to reorder list</p>
      </div>
    </div>
  );
}
