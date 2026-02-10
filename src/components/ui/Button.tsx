import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  external?: boolean;
}

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-block px-8 py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300 rounded-sm";

  const variants = {
    primary: "bg-secondary text-white hover:bg-secondary-light",
    secondary: "bg-white text-primary hover:bg-gray-100",
    outline:
      "border border-secondary text-secondary hover:bg-secondary hover:text-white",
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
