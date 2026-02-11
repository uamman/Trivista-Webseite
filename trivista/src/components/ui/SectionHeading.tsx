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
        className={`text-3xl font-normal md:text-[44px] md:leading-tight ${
          light ? "text-white" : "text-text-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg ${
            light ? "text-white/70" : "text-text"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
