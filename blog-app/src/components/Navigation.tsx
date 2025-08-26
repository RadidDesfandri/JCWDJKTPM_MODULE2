import { Menu, Search } from "lucide-react";
import Link from "next/link";

const routes = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Contact", url: "/contact" },
];

const Navigation = () => {
  return (
    <div className="mx-auto flex max-w-6xl justify-between border-b border-gray-300 px-5 py-5 lg:border-0">
      <div className="font-semibold">Blog Website</div>
      <div className="hidden items-center gap-6 lg:flex">
        {routes.map((item) => (
          <Link
            href={item.url}
            key={item.label}
            className="transition-all duration-300 hover:font-medium"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="hidden cursor-pointer items-center gap-2 lg:flex">
        <p>Search</p>
        <Search size={20} />
      </div>

      <button type="button" className="block lg:hidden">
        <Menu />
      </button>
    </div>
  );
};

export default Navigation;
