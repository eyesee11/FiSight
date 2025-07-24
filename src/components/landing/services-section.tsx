import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { BarChart3, Calculator, FileText, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    icon: BarChart3,
    title: 'Investment Analysis',
    description: 'Monitor your portfolio and get AI-powered rebalancing suggestions to stay on track with your goals.',
    expandedDescription: 'Leveraging advanced AI algorithms, FiSight provides in-depth analysis of your investment portfolio. Receive personalized recommendations for rebalancing your assets, identifying diversification opportunities, and optimizing your returns. Our AI continuously monitors market trends and your financial goals to ensure your investments are aligned with your long-term vision. Get insights into risk assessment and performance projections to make informed decisions about your financial future.',
  },
  {
    icon: Calculator,
    title: 'Affordability Simulation',
    description: 'Considering a big purchase? Simulate its impact on your long-term financial health before you commit.',
    expandedDescription: "Before making significant financial commitments like buying a home or car, use FiSight's affordability simulator to understand the real impact on your financial health. Input details of the potential purchase, and our AI will project its effects on your cash flow, savings, and overall net worth over time. This detailed analysis helps you make confident decisions and avoid unexpected financial strain.",
  },
  {
    icon: FileText,
    title: 'Scenario Planning',
    description: 'Explore potential financial futures. See how major life events or investment choices could play out.',
  },
];

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={
                `overflow-hidden shadow-lg transition-all duration-300 ease-in-out ${expandedService === index ? 'md:col-span-2 lg:col-span-3' : ''}`
              }
            >
              <CardHeader className="flex flex-row items-center space-x-4">
                <div className="p-3 rounded-full bg-primary text-primary-foreground">
                  <service.icon size={24} />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
                <AnimatePresence initial={false}>
                  {expandedService === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-muted-foreground"
                    >
                      {service.expandedDescription}
                    </motion.div>
                  )}
                </AnimatePresence>
                <button
                  onClick={() => toggleExpand(index)}
                  className="mt-4 text-primary hover:underline focus:outline-none"
                >
                  {expandedService === index ? 'Read Less' : 'Read More'}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
