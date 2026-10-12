import { cn } from "@/lib/cn";

export function Container({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className={cn("mx-auto w-full max-w-[var(--container)] px-4 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}
