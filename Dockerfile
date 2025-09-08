FROM node:24-alpine AS build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable pnpm
WORKDIR /app

# dependências
COPY ./package.json ./pnpm-lock.yaml ./pnpm-workspace.yaml /app/
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

ARG VITE_USE_HASH_ROUTER
ARG VITE_API_SERVER_HOST

# build
COPY . /app
RUN pnpm run build

FROM nginx:alpine

COPY ./nginx/ /etc/nginx/
RUN rm -rf /var/www/html
COPY --from=build /app/dist /var/www/html

EXPOSE 80
