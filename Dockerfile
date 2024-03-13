FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json ./
COPY package-lock.json ./
RUN npm ci


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .


ARG NEXT_PUBLIC_APP_API_KEY
ENV NEXT_PUBLIC_APP_API_KEY=$NEXT_PUBLIC_APP_API_KEY
ARG NEXT_PUBLIC_APP_APP_ID
ENV NEXT_PUBLIC_APP_APP_ID=$NEXT_PUBLIC_APP_APP_ID
ARG NEXT_PUBLIC_APP_AUTH_DOMAIN
ENV NEXT_PUBLIC_APP_AUTH_DOMAIN=$NEXT_PUBLIC_APP_AUTH_DOMAIN
ARG NEXT_PUBLIC_APP_MESSAGING_SENDER_ID
ENV NEXT_PUBLIC_APP_MESSAGING_SENDER_ID=$NEXT_PUBLIC_APP_MESSAGING_SENDER_ID
ARG NEXT_PUBLIC_APP_PROJECT_ID
ENV NEXT_PUBLIC_APP_PROJECT_ID=$NEXT_PUBLIC_APP_PROJECT_ID
ARG NEXT_PUBLIC_APP_STORAGE_BUCKET
ENV NEXT_PUBLIC_APP_STORAGE_BUCKET=$NEXT_PUBLIC_APP_STORAGE_BUCKET
ARG NEXT_PUBLIC_APP_MEASUREMENT_ID
ENV NEXT_PUBLIC_APP_MEASUREMENT_ID=$NEXT_PUBLIC_APP_MEASUREMENT_ID

ARG APP_PROJECT_ID
ENV APP_PROJECT_ID=$APP_PROJECT_ID
ARG APP_PRIVATE_KEY
ENV APP_PRIVATE_KEY=$APP_PRIVATE_KEY
ARG APP_CLIENT_EMAIL
ENV APP_CLIENT_EMAIL=$APP_CLIENT_EMAIL

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

ARG X_HASURA_API_SECRET
ENV X_HASURA_API_SECRET=$X_HASURA_API_SECRET

ARG GCS_BUCKET_NAME
ENV GCS_BUCKET_NAME=$GCS_BUCKET_NAME
ARG GCS_CLIENT_EMAIL
ENV GCS_CLIENT_EMAIL=$GCS_CLIENT_EMAIL
ARG GCS_PRIVATE_KEY
ENV GCS_PRIVATE_KEY=$GCS_PRIVATE_KEY

ARG NEXT_SHARP_PATH
ENV NEXT_SHARP_PATH=/app/node_modules/sharp


# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

# RUN yarn build

# If using npm comment out above and use below instead
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]