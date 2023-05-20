FROM node:16.18.1

# vamos definir que todo diretorio de trabalho seja a nossa pasta /app dentro do container 
WORKDIR /app

# arg vai definir a porta 6000, fazendo a aplicação expor essa porta 
ARG PORT=3000
# com ENV definimos uma variavel de ambiente que pode ser lida dentro do container 
ENV PORT=$PORT

# Devemos também sinalizar para o contianer que exponha para fora a porta 3000. 
# tirando a necessidade de quando fizermos o run do container termos que mapear via terminal
# EXPOSE 3000 -> modelo antigo, vamos atualizar para o modelo com variavel de ambiente
EXPOSE ${PORT}

# vamos definir que todo o projeto seja copiado para dentro do nosso diretorio de trabalho WORKDIR
# COPY . .  -> Colocamos dois pontos separados, o primeiro para indicar a pasta do projeto e o segundo o diretorio de trabalho
# como ja definimos o workir não precisamos colocar o caminho, por isso colocamos apenas o ponto (.)
COPY . /app

# vamos sinalizar ao container que devemos instalar os pacotes NPM do projeto após a copia dos arquivos 
RUN npm install
RUN npm run build

RUN ls -la

## vamos sinalizar para que após a instalação dos pacotes, inicialize o projeto
CMD ["npm", "run", "start"]