import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  children,
  className,
}: Props) {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-md font-medium transition-all duration-300",
        "bg-orange-600 hover:bg-orange-500",
        className
      )}
    >
      {children}
    </button>
  );
}
