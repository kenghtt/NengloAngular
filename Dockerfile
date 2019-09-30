#FROM node:10.16.0
#
#RUN mkdir /usr/src/app
#WORKDIR /usr/src/app
#
#RUN npm install -g @angular/cli@8.1.0
#
#COPY . /usr/src/app
#
#CMD ng serve --host 0.0.0.0 -port 4200
#


#NGINX Docker

#FROM nginx:alpine
#
#COPY nginx.conf /etc/nginx/nginx.conf
#
#WORKDIR /usr/share/nginx/html
#COPY dist/ .


FROM node:alpine AS builder

WORKDIR /app

COPY . .

RUN npm install && \
    npm run build

FROM nginx:alpine

COPY --from=builder /app/dist/* /usr/share/nginx/html/

