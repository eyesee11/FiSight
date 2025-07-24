'use client';

import { useState } from 'react';
import { Bot, User, CornerDownLeft, Sparkles, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { suggestFinancialActions } from '@/ai/flows/suggest-financial-actions';
import { mockCurrentFinancialSituation } from '@/lib/mock-data';
import { Skeleton } from '../ui/skeleton';

interface Message {
  id: number;
  role: 'user' | 'bot';
  content: React.ReactNode;
}

export function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now(), role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const result = await suggestFinancialActions({ financialData: `${mockCurrentFinancialSituation} User question: ${input}` });
      
      const botMessageContent = (
        <div className="space-y-4">
          <p>{result.rationale}</p>
          <ul className="space-y-2">
            {result.suggestedActions.map((action, index) => (
              <li key={index} className="flex items-start gap-2">
                <Sparkles className="h-4 w-4 text-primary mt-1 shrink-0" />
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>
      );
      
      const botMessage: Message = { id: Date.now() + 1, role: 'bot', content: botMessageContent };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        role: 'bot',
        content: (
          <div className="text-destructive flex items-center gap-2">
            <AlertTriangle className="h-4 w-4"/>
            <span>Sorry, I couldn't get a response. Please try again.</span>
          </div>
        )
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="default" className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg">
          <Bot className="h-7 w-7" />
          <span className="sr-only">Open Chat</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="font-headline">Chat with FiSight AI</SheetTitle>
          <SheetDescription>
            Ask any financial question in natural language.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex-1 my-4 pr-4 -mr-6">
          <div className="space-y-6">
            {messages.map((message) => (
              <div key={message.id} className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
                {message.role === 'bot' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback><Bot size={20}/></AvatarFallback>
                  </Avatar>
                )}
                <div className={`p-3 rounded-lg max-w-sm ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                  {message.content}
                </div>
                 {message.role === 'user' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback><User size={20}/></AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3">
                 <Avatar className="h-8 w-8">
                    <AvatarFallback><Bot size={20}/></AvatarFallback>
                  </Avatar>
                <div className="p-3 rounded-lg bg-muted space-y-2">
                  <Skeleton className="h-4 w-48" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <SheetFooter>
          <form onSubmit={handleSendMessage} className="flex w-full space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., How can I save more?"
              disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading}>
              <CornerDownLeft className="h-4 w-4" />
            </Button>
          </form>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
