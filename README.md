# Projeto prático Desenvolve MT 2025

[![typescript](https://img.shields.io/badge/typescript-v5-2f74c0?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-v19-58c4dc.svg?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-v7-646cff.svg?logo=vite)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React%20Router-v7-121212?logo=reactrouter)](https://reactrouter.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-00bcff.svg?logo=tailwindcss)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-v3-0a0a0a?logo=shadcnui)](https://ui.shadcn.com/)

---

## Sobre

Esta aplicação consome api para busca de pessoas desaparecidas. Foi desenvolvida para o processo seletivo da Desenvolve
MT 2025. O resultado pode ser visualizado em https://patetico.github.io/avaliacao-desenvolve-mt-2025

## Dados de inscrição

- Nome: Felipe Borges de Lima Naufal
- Email: felipenaufal@gmail.com

## Instalação e execução

### Via docker

<details>
<summary>Usando imagem pré-compilada</summary>

```bash
# Obtenha o container através do ghcr
docker pull ghcr.io/patetico/avaliacao-desenvolve-mt-2025:latest

# Rode o container bindando a porta `80` para uma porta local
docker run -p 8080:80 ghcr.io/patetico/avaliacao-desenvolve-mt-2025
```

A página estará disponível na url `http://localhost:8080`

> ❗ Nota: esta opção **não** permite o uso das configurações [listadas abaixo](#configurações-disponíveis)
</details>

**ou**

<details>
<summary>Compilando a imagem localmente</summary>

```bash
# Clone o projeto
git pull https://github.com/patetico/avaliacao-desenvolve-mt-2025.git

# Construa a imagem
docker build . -t avaliacao-desenvolve-mt-2025

# Rode o container bindando a porta `80` para uma porta local
docker run -p 8080:80 avaliacao-desenvolve-mt-2025
```

A página estará disponível na url `http://localhost:8080`

A imagem também pode ser compilada usando umas das [configurações disponíveis](#configurações-disponíveis) editando o
arquivo `.env` ou diretamente pela linha de comando:

```bash
docker build . -t avaliacao-desenvolve-mt-2025 --build-arg VITE_USE_HASH_ROUTER=true --build-arg VITE_API_SERVER_HOST="http://localhost:3000/" 
```

</details>

### Rodando localmente

<details>
<summary>Informações</summary>

Ferramentas recomendadas:

- [Node.js v24](https://nodejs.org/en/download)
- [pnpm v10](https://pnpm.io/installation)

```bash
# Clone o projeto
git pull https://github.com/patetico/avaliacao-desenvolve-mt-2025.git

# Instale as dependências
pnpm install --frozen-lockfile

# Compile a versão de produção
pnpm run build

# Execute o comando para servir a aplicação
pnpm run preview
```

A página estará disponível na url `http://localhost:4173`

Também é possível rodar a aplicação alterando uma das [configurações disponíveis](#configurações-disponíveis) editando o
arquivo `.env` ou diretamente pela linha de comando:

```bash
VITE_USE_HASH_ROUTER=true VITE_API_SERVER_HOST="http://localhost:3000/" pnpm run build
```

</details>

## Configurações disponíveis:

Estas configurações podem ser usadas durante a compilação da imagem docker ou do projeto local. Confira as seções
anteriores para detalhes sobre como aplicá-las.

- `VITE_USE_HASH_ROUTER`: se vazio, a aplicação usará
  o [BrowserRouter](https://reactrouter.com/api/data-routers/createBrowserRouter) do react router. Caso contrário usará
  o [HashRouter](https://reactrouter.com/api/data-routers/createHashRouter)
- `VITE_API_SERVER_HOST`: permite alterar o endpoint da api
