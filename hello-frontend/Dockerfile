#React app
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ARG REACT_ENV_FILE=env.local
RUN cp $REACT_ENV_FILE .env && \
    echo "window._env_ = {" > public/env.js && \
    grep -v '^#' .env | sed -E 's/(.*)=(.*)/ \1: "\2",/' >> public/env.js && \
    echo "};" >> public/env.js

RUN npm run build

#Serve it with nginx
FROM nginx:alpine

# Copy React built frontend
COPY --from=build /app/build /usr/share/nginx/html

# Copy  nginx config
COPY nginx.conf /etc/nginx/

COPY certs /etc/nginx/certs

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]