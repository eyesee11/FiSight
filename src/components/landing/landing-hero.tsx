import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function LandingHero() {
  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
      <div className="space-y-6 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter">
          Navigate Your Financial Future with <span className="text-primary">AI-Powered Clarity</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
          FiSight combines cutting-edge AI with your financial data to provide actionable insights, helping you make smarter decisions and achieve your goals faster.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button asChild size="lg">
            <Link href="/dashboard">Explore Your Dashboard</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#services">Learn More</Link>
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        <Image 
          src="https://placehold.co/600x400.png"
          alt="Financial Dashboard Illustration"
          width={600}
          height={400}
          className="rounded-xl shadow-2xl"
          data-ai-hint="finance dashboard"
        />
      </div>
    </section>
  );
}
