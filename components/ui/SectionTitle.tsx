type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  as?: "h2" | "h3";
};

export function SectionTitle({
  id,
  eyebrow,
  title,
  as: Tag = "h2",
}: Props) {
  return (
    <div className="mb-8 max-w-2xl sm:mb-10">
      {eyebrow ? (
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-sage sm:text-sm sm:tracking-[0.18em]">
          {eyebrow}
        </p>
      ) : null}
      <Tag
        id={id}
        className="text-balance font-serif text-[1.625rem] font-medium leading-[1.2] tracking-tight text-foreground sm:text-3xl sm:leading-tight md:text-4xl"
      >
        {title}
      </Tag>
    </div>
  );
}
