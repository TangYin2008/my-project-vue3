# Copyright (c) 2024 tong<admin>
# 
# This software is released under the MIT License.
# https://opensource.org/licenses/MIT

# build stage
FROM node:18-alpine as build-stage
WORKDIR /app
COPY package*.json ./
COPY pnpm*.yaml ./

RUN npm install -g pnpm --registry=https://registry.npmmirror.com && npm config set registry=https://registry.npmmirror.com && pnpm install

COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]