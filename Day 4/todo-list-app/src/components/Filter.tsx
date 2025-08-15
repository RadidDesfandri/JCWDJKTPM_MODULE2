import { Filters } from "@/types/todo-type";
import clsx from "clsx";

interface FilterProps {
  withBackground?: boolean;
  filter: Filters;
  changeFilter: (filter: Filters) => void;
}

const filterItems = ["All", "Active", "Completed"];

const Filter: React.FC<FilterProps> = ({
  withBackground,
  changeFilter,
  filter,
}) => {
  return (
    <div
      className={clsx(
        "items-center gap-3",
        withBackground
          ? "flex justify-center rounded-md border border-neutral-100 bg-white py-4 shadow-md md:hidden dark:border-[#25273D] dark:bg-[#25273D]"
          : "hidden md:flex",
      )}
    >
      {filterItems.map((item) => (
        <p
          key={item}
          onClick={() => changeFilter(item.toLowerCase() as Filters)}
          className={clsx(
            "cursor-pointer",
            filter === item.toLowerCase() ? "font-bold" : "font-light",
          )}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default Filter;
