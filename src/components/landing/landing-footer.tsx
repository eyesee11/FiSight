import Link from 'next/link';
import { Bot } from 'lucide-react';

export function LandingFooter() {
  return (
    <footer className="bg-muted py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <Bot className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold font-headline">FiSight</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-medium">
          <Link href="#services" className="text-muted-foreground transition-colors hover:text-foreground">
            Services
          </Link>
          <Link href="#about" className="text-muted-foreground transition-colors hover:text-foreground">
            About Us
          </Link>
          <Link href="#faq" className="text-muted-foreground transition-colors hover:text-foreground">
            FAQ
          </Link>
          <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
            Terms of Service
          </Link>
        </nav>
        <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} FiSight. All rights reserved.</p>
      </div>
    </footer>
  );
}
