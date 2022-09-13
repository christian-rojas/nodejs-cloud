FROM node:16-alpine3.16

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY tsconfig.json .

ENV PORT=3000
ENV MONGO_URL='mongo'

COPY src ./src

RUN npm install

RUN npm run build


# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source

EXPOSE 3000
CMD [ "node", "dist/index.js" ]