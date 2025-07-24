import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mt-4">
            We'd love to hear from you. Whether you have a question, feedback, or a partnership inquiry, please reach out.
          </p>
        </div>
        <form className="grid gap-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
          </div>
          <Textarea placeholder="Your Message" rows={6} />
          <div className="flex justify-center">
            <Button size="lg">Send Message</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
