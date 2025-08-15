"use client";

import { IoClose } from "react-icons/io5";
import Checkbox from "./Checkbox";
import clsx from "clsx";

interface CardTodoProps {
  todo: string;
  isCompleted: boolean;
  deleteTodo: () => void;
  completedTodo: () => void;
}

const CardTodo: React.FC<CardTodoProps> = ({
  todo,
  deleteTodo,
  completedTodo,
  isCompleted,
}) => {
  return (
    <div className="flex items-center justify-between border-b border-b-[#E3E4F1] px-5 py-4 dark:border-b-[#494C6B]">
      <div className="flex items-center gap-4">
        <Checkbox onChecked={completedTodo} active={isCompleted} />
        <p className={clsx(isCompleted && "text-neutral-500 line-through")}>
          {todo}
        </p>
      </div>

      <button
        onClick={deleteTodo}
        className="cursor-pointer text-black dark:text-[#494C6B]"
      >
        <IoClose size={25} />
      </button>
    </div>
  );
};

export default CardTodo;
