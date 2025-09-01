import type { PessoaDTO } from './_base.ts';


/** Response de `GET /v1/pessoas/:id` */
export type DetalhaPessoaResp = PessoaDTO

/** Request params de `GET /v1/pessoas/:id` */
export interface DetalhaPessoaReq {
  id: number;
}
