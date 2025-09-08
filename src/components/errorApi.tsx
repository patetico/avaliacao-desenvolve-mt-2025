import { RefreshCcw, ServerCrash, Skull } from 'lucide-react';
import { Button } from '~ui/button';


export function ErrorApi({ retry }: { retry?: () => void }) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <ServerCrash size="8rem" className="text-red-500" />
      <p className="text-xl">
        Houve um erro inesperado na API <Skull className="inline-block mb-1" />
      </p>
      {retry &&
        <Button variant="secondary" onClick={() => retry()}>
          Tentar novamente
          <RefreshCcw />
        </Button>
      }
    </div>
  );
}
