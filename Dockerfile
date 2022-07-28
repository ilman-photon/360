FROM node:15.9.0 as runner
WORKDIR /app
# ENV NODE_ENV dev

# If you are using a custom next.config.js file, uncomment this line.
# COPY ./next.config.js ./
# COPY ./public ./public
# COPY ./.next ./.next
# COPY ./node_modules ./node_modules
# COPY ./package.json ./package.json

ADD ./ ./

EXPOSE 3000
CMD ["yarn", "start"]