import type { ControllerProps } from 'react-hook-form';
import { z } from 'zod';


export const searchFormSchema = z.object({
  nome: z.union([z.string().trim().max(0), z.string().trim().min(4).optional()]),
  idade: z.tuple([
    z.number().min(0).max(150),
    z.number().min(0).max(150),
  ]).optional(),
  genero: z.enum(['MASCULINO', 'FEMININO']).optional(),
  status: z.enum(['DESAPARECIDO', 'LOCALIZADO']).optional(),
});

export type SearchFormParams = z.infer<typeof searchFormSchema>;

export type ControllerWithoutRenderProps = Omit<ControllerProps, 'render' | 'name'>
