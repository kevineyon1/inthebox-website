import { cn } from "@/lib/cn";

export function SectionHeading({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("text-center", className)}>
      <h2 className="text-[32px] sm:text-[40px]">{title}</h2>
      {subtitle && <p className="mt-2 text-lg font-normal">{subtitle}</p>}
    </div>
  );
}
