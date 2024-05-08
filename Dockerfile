# Usa uma imagem base slim do Node.js
FROM node:lts-slim

# Instala dependências necessárias
RUN apt-get update && apt-get install -y \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

USER node

# Define o diretório de trabalho
WORKDIR /home/node/app

# Cria um volume que aponta para o diretório de trabalho
VOLUME /home/node/app

# Expõe a porta 3000 para conexões de rede
EXPOSE 3000

# Mantém o container rodando em modo de espera
CMD ["tail", "-f", "/dev/null"]
