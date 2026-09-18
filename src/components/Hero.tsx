import { Container, Button } from "./ui";

export function Hero() {
  return (
    <section className="pt-20 pb-24 md:pt-32 md:pb-32">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.1]">
            Sharif Masyhur
          </h1>

          <p className="mt-5 text-xl md:text-2xl text-ink font-display">
            Computer Engineering Graduate
          </p>

          <p className="mt-6 text-lg text-ink-muted leading-relaxed max-w-xl">
            Universitas Indonesia, 2022–2026. Focused on networking and IT
            infrastructure, with systems troubleshooting, cloud, and web
            development as supporting areas.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#work" variant="primary">
              View Work
            </Button>
            <Button href="#contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
