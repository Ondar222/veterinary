FROM node:16-alpine
WORKDIR /app
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
RUN npm install
COPY /public ./public
#COPY /.next /.next
EXPOSE 3000
CMD ["npm", "run", "dev"]