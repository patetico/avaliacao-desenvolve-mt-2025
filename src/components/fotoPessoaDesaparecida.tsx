import MissingPerson from '~/components/icons/MissingPerson.tsx';


function FotoPessoaDesaparecida({ url }: { url?: string }) {
  return url
    ? (<img src={url} alt="Foto da pessoa desaparecida" className="object-contain size-full" />)
    : (<MissingPerson aria-label="Ilustração de pessoa desaparecida sem foto" className="size-full" />);
}

export default FotoPessoaDesaparecida;
