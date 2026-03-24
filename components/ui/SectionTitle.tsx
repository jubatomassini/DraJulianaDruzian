type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  as?: "h2" | "h3";
  /** Mobile centralizado; a partir de `sm` alinha à esquerda. */
  align?: "responsive" | "left";
};

export function SectionTitle({
  id,
  eyebrow,
  title,
  as: Tag = "h2",
  align = "responsive",
}: Props) {
  const wrap =
    align === "responsive"
      ? "mx-auto max-w-[min(100%,42rem)] text-center sm:mx-0 sm:max-w-2xl sm:text-left"
      : "max-w-2xl";

  return (
    <div className={`mb-8 sm:mb-10 ${wrap}`}>
      {eyebrow ? (
        <p
          className={`mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-sage sm:text-sm sm:tracking-[0.16em] ${align === "responsive" ? "text-center sm:text-left" : ""}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        id={id}
        className="text-balance font-sans text-2xl font-semibold leading-[1.2] tracking-tight text-foreground sm:text-3xl sm:leading-tight md:text-4xl"
      >
        {title}
      </Tag>
    </div>
  );
}
