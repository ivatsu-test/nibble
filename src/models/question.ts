import { z } from 'zod';

const answerSchema = z.object({
  text: z.string(),
  isCorrect: z.boolean(),
  option: z.union([z.literal('A'), z.literal('B'), z.literal('C'), z.literal('D')]),
});

const questionSchema = z.object({
  id: z.number(),
  question: z.string(),
  answers: z.array(answerSchema),
  prize: z.string(),
});

export const questionsSchema = z.array(questionSchema);

export type Answer = z.infer<typeof answerSchema>;
export type Question = z.infer<typeof questionSchema>;
export type Questions = z.infer<typeof questionsSchema>;
