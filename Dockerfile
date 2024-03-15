# Base stage
# ---------------------------------------
FROM node:18.18.2-alpine3.18 AS base

# This get shared across later stages
WORKDIR /node
RUN chown node:node /node
USER node

# Development stage
# ---------------------------------------
FROM base AS development

ENV SERVER_PORT=3000
ENV PATH /node/node_modules/.bin:$PATH
EXPOSE $SERVER_PORT 9229

COPY --chown=node:node package*.json ./

RUN \
  NODE_ENV=development && \
  npm ci && \
  npm cache clean --force

WORKDIR /node/app

CMD [ "nest", "start", "--debug", "--watch" ]

# Source stage
# ---------------------------------------
FROM base AS source

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /node
COPY --chown=node:node package*.json ./

RUN \
  npm ci --no-optional && \
  npm cache clean --force

COPY --chown=node:node . .

# Test stage
# ---------------------------------------
FROM source AS test

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
ENV PATH /node/node_modules/.bin:$PATH

COPY --chown=node:node --from=development /node/node_modules /node/node_modules

RUN \
  npm run test && \
  npm run lint

# Production stage
# ---------------------------------------
FROM source AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV PATH /node/node_modules/.bin:$PATH
ENV SERVER_PORT=3000

EXPOSE $SERVER_PORT

CMD [ "node", "dist/main" ]
