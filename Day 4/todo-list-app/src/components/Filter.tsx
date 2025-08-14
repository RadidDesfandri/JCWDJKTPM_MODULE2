import clsx from "clsx";

interface FilterProps {
  withBackground?: boolean;
}

const Filter: React.FC<FilterProps> = ({ withBackground }) => {
  return (
    <div
      className={clsx(
        "items-center gap-3 font-bold",
        withBackground
          ? "flex justify-center rounded-md border border-neutral-100 bg-white py-4 shadow-md md:hidden dark:border-[#25273D] dark:bg-[#25273D]"
          : "hidden md:flex",
      )}
    >
      <p className="cursor-pointer">All</p>
      <p className="cursor-pointer">Active</p>
      <p className="cursor-pointer">Completed</p>
    </div>
  );
};

export default Filter;
