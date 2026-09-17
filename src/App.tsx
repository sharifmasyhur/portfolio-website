import { Container, Section, SectionHeading, Button, Tag, Divider } from "@/components/ui";

/**
 * STAGE 1 PLACEHOLDER
 * ----------------------------------------------------------------
 * This is not the homepage. Per the Stage 1 scope, this file exists
 * only to render the design tokens and UI primitives so they can be
 * reviewed in isolation before any real content/layout is built.
 * It will be replaced entirely in Stage 2.
 */
export default function App() {
  const swatches = [
    { name: "paper", var: "--color-paper", className: "bg-paper border border-line" },
    { name: "paper-raised", var: "--color-paper-raised", className: "bg-paper-raised border border-line" },
    { name: "ink", var: "--color-ink", className: "bg-ink" },
    { name: "ink-muted", var: "--color-ink-muted", className: "bg-ink-muted" },
    { name: "indigo", var: "--color-indigo", className: "bg-indigo" },
    { name: "terracotta", var: "--color-terracotta", className: "bg-terracotta" },
  ];

  return (
    <main>
      <Section>
        <p className="text-sm text-terracotta mb-2">Stage 1 — Foundation Preview</p>
        <h1 className="text-4xl md:text-5xl text-ink mb-4">Design System</h1>
        <p className="text-lg text-ink-muted max-w-xl">
          Not the homepage — a visual reference for the tokens and primitives
          Portfolio 2.0 is being built from.
        </p>
      </Section>

      <Divider />

      <Section tone="raised">
        <SectionHeading title="Color" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {swatches.map((s) => (
            <div key={s.name}>
              <div className={`h-20 rounded-md mb-2 ${s.className}`} />
              <p className="text-sm text-ink font-medium">{s.name}</p>
              <p className="text-xs text-ink-muted">{s.var}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Type scale" />
        <div className="space-y-4">
          <p className="text-5xl text-ink">Aa — text-5xl / display</p>
          <p className="text-3xl text-ink">Aa — text-3xl / heading</p>
          <p className="text-xl text-ink">Aa — text-xl / lede</p>
          <p className="text-base text-ink font-body">
            Aa — text-base / body (Inter). The quick brown fox jumps over the lazy dog.
          </p>
          <p className="text-sm text-ink-muted">Aa — text-sm / caption, muted</p>
        </div>
      </Section>

      <Section tone="raised">
        <SectionHeading title="Primitives" />
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <Button variant="primary" href="#">Primary Button</Button>
          <Button variant="secondary" href="#">Secondary Button</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Tag>Networking</Tag>
          <Tag>IT Infrastructure</Tag>
          <Tag>Systems</Tag>
          <Tag>Cloud / Web</Tag>
        </div>
      </Section>

      <Container className="pb-24">
        <Divider className="mb-6" />
        <p className="text-sm text-ink-muted">
          Borders are 1px hairlines, shadows are near-invisible, radii are small.
          No gradients, no floating cards.
        </p>
      </Container>
    </main>
  );
}
