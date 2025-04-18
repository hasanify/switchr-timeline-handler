FROM node:20-alpine
WORKDIR /app
RUN apk add --no-cache openssl1.1-compat
COPY package*.json ./
COPY prisma /app/prisma
RUN npm install
COPY . .
RUN npm run tsc:build
CMD ["npm", "start"]