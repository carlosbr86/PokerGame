# Use a imagem base do Node.js
FROM node:18

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie os arquivos necessários para o diretório de trabalho
COPY package.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do aplicativo
COPY . .

# Exponha a porta necessária pelo seu aplicativo
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]