import { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import DetalhesPessoa from '~/components/detalhesPessoa';


function PessoaDesaparecida() {
  const { id } = useLoaderData<{ id?: number }>();
  const navigate = useNavigate();

  useEffect(
    () => {
      if (!id) navigate('/');
    },
    [id, navigate],
  );

  if (!id) return;

  return (
    <div className="w-full flex justify-center p-8">
      <DetalhesPessoa idPessoa={id} />
    </div>
  );
}

export default PessoaDesaparecida;
