import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center lg:order-2">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Team collaborating"
            width={600}
            height={400}
            className="rounded-xl shadow-2xl"
            data-ai-hint="team collaboration"
          />
        </div>
        <div className="space-y-6 text-center lg:text-left lg:order-1">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Mission: Financial Empowerment for All</h2>
          <p className="text-lg text-muted-foreground">
            We believe that everyone deserves access to high-quality financial guidance. FiSight was born from a desire to democratize financial planning, using the power of artificial intelligence to make expert-level insights accessible and affordable. Our team of finance and technology professionals is dedicated to building intuitive tools that help you build a brighter financial future.
          </p>
          <p className="text-muted-foreground">
            We're committed to your privacy and security. Your data is always encrypted, anonymized, and never shared.
          </p>
        </div>
      </div>
    </section>
  );
}
