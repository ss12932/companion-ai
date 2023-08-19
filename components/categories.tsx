"use client";
import { Category } from "@prisma/client";

import { cn } from "@/lib/utils";

interface CategoriesProps {
  data: Category[];
}

const Categories: React.FC<CategoriesProps> = ({ data }: CategoriesProps) => {
  return (
    <div className="w-full overflow-x-auto space-x-2 flex p-1">
      <button
        className={cn(
          "flex items-center text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3 rounded-md bg-primary/10 hover:opacity-75 transition"
        )}
      >
        Newest
      </button>
    </div>
  );
};

export default Categories;
