FROM node:20.17-alpine

WORKDIR /app

# Copia arquivos de definição de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . .

# Expõe a porta (substitua pela porta real usada pela sua aplicação)
EXPOSE 3001

# Define o comando para iniciar a aplicação
CMD ["npm", "start"]
