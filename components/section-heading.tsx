export function SectionHeading({
  index,
  title,
}: {
  index: string
  title: string
}) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <h2 className="flex items-baseline gap-3 whitespace-nowrap text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        <span className="font-mono text-base font-normal text-primary">
          {index}
        </span>
        {title}
      </h2>
      <span className="h-px w-full max-w-xs bg-border" />
    </div>
  )
}
