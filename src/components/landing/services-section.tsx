import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart3, Calculator, FileText, Sparkles } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Investment Analysis',
    description: 'Monitor your portfolio and get AI-powered rebalancing suggestions to stay on track with your goals.',
  },
  {
    icon: Calculator,
    title: 'Affordability Simulation',
    description: 'Considering a big purchase? Simulate its impact on your long-term financial health before you commit.',
  },
  {
    icon: FileText,
    title: 'Scenario Planning',
    description: 'Explore potential financial futures. See how major life events or investment choices could play out.',
  },
  {
    icon: Sparkles,
    title: 'AI Financial Chat',
    description: 'Ask complex financial questions in plain English and get clear, actionable advice from our AI assistant.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">All-in-One Financial Toolkit</h2>
          <p className="text-lg text-muted-foreground mt-4">
            FiSight provides a comprehensive suite of AI tools designed to empower every aspect of your financial life.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-xl transition-shadow">
              <CardHeader className="p-0">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-base">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
