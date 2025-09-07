import MissingPerson from '~/components/icons/MissingPerson';
import { cn } from '~/lib/shadcn';


interface FotoPessoaDesaparecidaProps {
  url?: string;
  align?: 'center' | 'top';
}


function FotoPessoaDesaparecida({ url, align }: FotoPessoaDesaparecidaProps) {
  const baseCls = 'size-full';
  const alignTop = align === 'top'; // center por padrão

  return url
    ? (
      <img
        src={url}
        alt="Foto da pessoa desaparecida"
        className={cn(baseCls, 'object-contain', alignTop ? 'object-top' : 'object-center')}
      />)
    : (
      <MissingPerson
        aria-label="Ilustração de pessoa desaparecida sem foto"
        className={baseCls}
        preserveAspectRatio={alignTop ? 'xMidYMin meet' : 'xMidYMid meet'}
      />);
}

export default FotoPessoaDesaparecida;
