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
    <div className="mb-10 max-w-2xl">
      {eyebrow ? (
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-sage">
          {eyebrow}
        </p>
      ) : null}
      <Tag
        id={id}
        className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </Tag>
    </div>
  );
}
