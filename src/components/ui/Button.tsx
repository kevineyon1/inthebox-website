import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-ink text-cream hover:bg-[#0C2542]",
  secondary: "bg-terra text-cream hover:bg-coral",
  light: "bg-card text-ink hover:bg-paper",
  sale: "bg-coral text-cream hover:bg-terra",
  outline: "border border-line bg-card text-ink hover:border-ink",
} as const;

const sizes = {
  sm: "h-10 px-6 text-sm",
  md: "h-12 px-7 text-[15px]",
} as const;

type Props = {
  href?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  external?: boolean;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({
  href,
  variant = "primary",
  size = "sm",
  className,
  external,
  children,
  ...rest
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-colors",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
