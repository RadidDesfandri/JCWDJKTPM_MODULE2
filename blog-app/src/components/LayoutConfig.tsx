import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface LayoutConfigProps {
  id?: string;
  children: ReactNode;
  className?: string;
  center?: boolean;
}

const LayoutConfig: React.FC<LayoutConfigProps> = ({
  id,
  children,
  className,
  center,
}) => {
  return (
    <div
      id={id}
      className={cn(
        "mx-auto max-w-6xl px-5",
        center && "flex min-h-screen items-center justify-center",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default LayoutConfig;
