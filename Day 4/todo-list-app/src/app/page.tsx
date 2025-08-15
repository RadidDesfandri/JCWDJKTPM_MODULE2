"use client";

import CardTodo from "@/components/CardTodo";
import Filter from "@/components/Filter";
import Header from "@/components/Header";
import { Filters, TodoItemType } from "@/types/todo-type";
import Image from "next/image";
import { FormEvent, useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState<TodoItemType[]>([]);
  const [input, setInput] = useState<string>("");
  const [filter, setFilter] = useState<Filters>("all");

  const addTodo = (e: FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    setTodo([
      ...todo,
      { id: `id-${Date.now()}`, isCompleted: false, todo: input },
    ]);

    setInput("");
    setFilter("all");
  };

  const completedTodo = (id: string) => {
    setTodo((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item,
      ),
    );
  };

  const deleteTodo = (id: string) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  const changeFilter = (filter: Filters) => setFilter(filter);

  const todosFilter = todo.filter((item) => {
    if (filter === "active") return !item.isCompleted;
    if (filter === "completed") return item.isCompleted;

    return true;
  });

  return (
    <div className="relative">
      <Image
        src="/Bitmap.png"
        alt="Bitmap"
        width={1000}
        height={400}
        priority
        className="min-h-52 w-full object-cover"
      />

      {/* Todo Content */}
      <div className="absolute top-10 left-1/2 w-full max-w-2xl -translate-x-1/2 transform px-5">
        <Header />

        <div className="mt-9 flex flex-col gap-5">
          <form onSubmit={addTodo} className="relative">
            <div className="absolute top-1/2 left-5 h-4 w-4 -translate-y-1/2 transform rounded-full border-2 border-[#E3E4F1] p-3 dark:border-[#393A4B]" />
            <input
              type="text"
              placeholder="Create a new todo..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full rounded-md bg-white py-4 pl-16 outline-none dark:bg-[#25273D]"
            />
          </form>

          <div className="flex flex-col rounded-md bg-white shadow-md dark:bg-[#25273D]">
            {todosFilter.length === 0 && (
              <p className="py-4 text-center text-sm">Tidak ada data</p>
            )}
            {todosFilter.map((item) => (
              <CardTodo
                key={item.id}
                todo={item.todo}
                isCompleted={item.isCompleted}
                deleteTodo={() => deleteTodo(item.id)}
                completedTodo={() => completedTodo(item.id)}
              />
            ))}
            <div className="flex items-center justify-between px-5 py-4">
              <p>{todo.length} Item Left</p>
              <Filter changeFilter={changeFilter} filter={filter} />
              <p>Clear Completed</p>
            </div>
          </div>

          <Filter withBackground changeFilter={changeFilter} filter={filter} />
        </div>
        <p className="mt-10 text-center">Drag and drop to reorder list</p>
      </div>
    </div>
  );
}
