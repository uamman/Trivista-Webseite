import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
}

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-block px-8 py-3 text-lg font-bold transition-all duration-300 rounded-[30px] border";

  const variants = {
    primary:
      "bg-primary text-white border-primary hover:bg-transparent hover:text-primary",
    ghost:
      "bg-transparent text-white border-white hover:bg-white hover:text-primary",
  };

  const className = `${baseStyles} ${variants[variant]}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
