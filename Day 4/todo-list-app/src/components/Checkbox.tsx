import clsx from "clsx";
import { FaCheck } from "react-icons/fa";

interface CheckboxProps {
  active: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ active }) => {
  return (
    <div
      className={clsx(
        "relative h-4 w-4 rounded-full p-3 cursor-pointer",
        active
          ? "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
          : "border-2 border-[#E3E4F1] dark:border-[#393A4B]",
      )}
    >
      {active && (
        <FaCheck
          size={13}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white"
        />
      )}
    </div>
  );
};

export default Checkbox;
