import { config } from 'dotenv';

config();

export default {
  dbUrl: process.env.DB_URL,
  brokerUrl: process.env.BROKER_URL,
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT ? Number(process.env.REDIS_PORT) : 6379,
  },
  server: {
    baseUrl: process.env.BASE_URL,
    routePrefix: process.env.ROUTE_PREFIX,
    port: process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000,
    cors: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    },
  },
  swagger: {
    prefix: process.env.SWAGGER_PREFIX,
  },
  // auth: {
  //   jwt: {
  //     access: {
  //       secret: process.env.JWT_ACCESS_SECRET,
  //       lifetime: process.env.JWT_ACCESS_LIFETIME
  //         ? Number(process.env.JWT_ACCESS_LIFETIME)
  //         : 86400,
  //     },
  //     refresh: {
  //       secret: process.env.JWT_REFRESH_SECRET,
  //       lifetime: process.env.JWT_REFRESH_LIFETIME
  //         ? Number(process.env.JWT_REFRESH_LIFETIME)
  //         : 2592000,
  //     },
  //   },
  // },
};
