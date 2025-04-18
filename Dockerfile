FROM node:20
WORKDIR /app
COPY package*.json ./
COPY prisma /app/prisma
RUN npm install
COPY . .
RUN npm run tsc:build
CMD ["npm", "start"];