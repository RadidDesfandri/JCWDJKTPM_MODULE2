import { IoClose } from "react-icons/io5";
import Checkbox from "./Checkbox";

const CardTodo = () => {
  return (
    <div className="flex items-center justify-between border-b border-b-[#E3E4F1] px-5 py-4 dark:border-b-[#494C6B]">
      <div className="flex items-center gap-4">
        <Checkbox active={false} />
        <p>Todo list</p>
      </div>

      <button className="cursor-pointer text-black dark:text-[#494C6B]">
        <IoClose size={25} />
      </button>
    </div>
  );
};

export default CardTodo;
