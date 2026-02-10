interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2
        className={`text-3xl font-light tracking-wide md:text-4xl ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg ${
            light ? "text-white/70" : "text-text-light"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-6 h-px w-16 bg-secondary" />
    </div>
  );
}
