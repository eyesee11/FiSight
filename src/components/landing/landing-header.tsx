'use client';

import Link from 'next/link';
import { Bot, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/shared/theme-toggle';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About Us' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Bot className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold font-headline">FiSight</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
          <Button asChild>
            <Link href="/login">Get Started</Link>
          </Button>
        </div>
        <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <div className="grid gap-6 p-6">
                    <Link href="/" className="flex items-center gap-2">
                        <Bot className="h-7 w-7 text-primary" />
                        <span className="text-xl font-bold font-headline">FiSight</span>
                    </Link>
                    <nav className="grid gap-4">
                        {navLinks.map(link => (
                        <Link key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                            {link.label}
                        </Link>
                        ))}
                    </nav>
                     <Button asChild>
                        <Link href="/login">Get Started</Link>
                    </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
