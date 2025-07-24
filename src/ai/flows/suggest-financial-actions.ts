'use server';

/**
 * @fileOverview A flow for suggesting financial actions to improve a user's financial situation.
 *
 * - suggestFinancialActions - A function that suggests financial actions based on user data.
 * - SuggestFinancialActionsInput - The input type for the suggestFinancialActions function.
 * - SuggestFinancialActionsOutput - The return type for the suggestFinancialActions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestFinancialActionsInputSchema = z.object({
  financialData: z.string().describe('A consolidated string of the user\'s financial data.'),
});
export type SuggestFinancialActionsInput = z.infer<typeof SuggestFinancialActionsInputSchema>;

const SuggestFinancialActionsOutputSchema = z.object({
  suggestedActions: z.array(z.string()).describe('A list of suggested actions to improve the user\'s financial situation.'),
  rationale: z.string().describe('The rationale behind the suggested actions.'),
});
export type SuggestFinancialActionsOutput = z.infer<typeof SuggestFinancialActionsOutputSchema>;

export async function suggestFinancialActions(input: SuggestFinancialActionsInput): Promise<SuggestFinancialActionsOutput> {
  return suggestFinancialActionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestFinancialActionsPrompt',
  input: {schema: SuggestFinancialActionsInputSchema},
  output: {schema: SuggestFinancialActionsOutputSchema},
  prompt: `You are a financial advisor. Based on the following financial data, suggest actions the user can take to improve their financial situation.

Financial Data: {{{financialData}}}

Consider various aspects of financial health, such as savings, debt, investments, and income. Provide clear, actionable suggestions and explain the reasoning behind each suggestion.

Output the suggestions as a list of strings in the suggestedActions field and the overall rationale in the rationale field. Be concise.`,
});

const suggestFinancialActionsFlow = ai.defineFlow(
  {
    name: 'suggestFinancialActionsFlow',
    inputSchema: SuggestFinancialActionsInputSchema,
    outputSchema: SuggestFinancialActionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
