import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Is my financial data secure?',
    answer: 'Absolutely. We use bank-level encryption (AES-256) for all your data. We do not store your bank credentials, and all analysis is done on anonymized data. Your privacy and security are our top priorities.',
  },
  {
    question: 'How does the AI work?',
    answer: 'Our AI uses advanced large language models (LLMs) trained on vast amounts of financial data and strategies. It analyzes your specific financial situation to provide personalized insights and recommendations, similar to a human financial advisor.',
  },
  {
    question: 'Do I need to link my bank accounts?',
    answer: 'For the most accurate and automated insights, linking your accounts is recommended. However, we also offer the ability to input your financial data manually if you prefer.',
  },
  {
    question: 'Is FiSight a replacement for a human financial advisor?',
    answer: 'FiSight is a powerful tool to help you understand and manage your finances. While it provides expert-level analysis, it is not a certified financial planner. We recommend consulting with a qualified human advisor for complex financial decisions or personalized investment management.',
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/50">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Have questions? We've got answers.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
