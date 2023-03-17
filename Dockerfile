# stage 1 (building)
FROM node:16.19.1-alpine as build
RUN mkdir /app-ui
WORKDIR /app-ui
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# stage 2 (running)
FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
## replace default nginx index page
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app-ui/dist/urartusoftware-ui /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
# to serve on 4200 forward port when runnind image
# docker run -d -p 4200:80 urartusoftware/us-ui