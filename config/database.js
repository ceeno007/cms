// const path = require('path');

// module.exports = ({ env }) => {
//   const client = env('DATABASE_CLIENT', 'sqlite');

//   const connections = {
//     mysql: {
//       connection: {
//         connectionString: env('DATABASE_URL'),
//         host: env('DATABASE_HOST', 'localhost'),
//         port: env.int('DATABASE_PORT', 3306),
//         database: env('DATABASE_NAME', 'strapi'),
//         user: env('DATABASE_USERNAME', 'strapi'),
//         password: env('DATABASE_PASSWORD', 'strapi'),
//         ssl: env.bool('DATABASE_SSL', false) && {
//           key: env('DATABASE_SSL_KEY', undefined),
//           cert: env('DATABASE_SSL_CERT', undefined),
//           ca: env('DATABASE_SSL_CA', undefined),
//           capath: env('DATABASE_SSL_CAPATH', undefined),
//           cipher: env('DATABASE_SSL_CIPHER', undefined),
//           rejectUnauthorized: env.bool(
//             'DATABASE_SSL_REJECT_UNAUTHORIZED',
//             true
//           ),
//         },
//       },
//       pool: {
//         min: env.int('DATABASE_POOL_MIN', 2),
//         max: env.int('DATABASE_POOL_MAX', 10),
//         idleTimeoutMillis: env.int('DATABASE_POOL_IDLE_TIMEOUT', 30000), // Time after which idle connections will be closed
//       },
//     },
//     mysql2: {
//       connection: {
//         host: env('DATABASE_HOST', 'localhost'),
//         port: env.int('DATABASE_PORT', 3306),
//         database: env('DATABASE_NAME', 'strapi'),
//         user: env('DATABASE_USERNAME', 'strapi'),
//         password: env('DATABASE_PASSWORD', 'strapi'),
//         ssl: env.bool('DATABASE_SSL', false) && {
//           key: env('DATABASE_SSL_KEY', undefined),
//           cert: env('DATABASE_SSL_CERT', undefined),
//           ca: env('DATABASE_SSL_CA', undefined),
//           capath: env('DATABASE_SSL_CAPATH', undefined),
//           cipher: env('DATABASE_SSL_CIPHER', undefined),
//           rejectUnauthorized: env.bool(
//             'DATABASE_SSL_REJECT_UNAUTHORIZED',
//             true
//           ),
//         },
//       },
//       pool: {
//         min: env.int('DATABASE_POOL_MIN', 2),
//         max: env.int('DATABASE_POOL_MAX', 10),
//         idleTimeoutMillis: env.int('DATABASE_POOL_IDLE_TIMEOUT', 30000), // Time after which idle connections will be closed
//       },
//     },
//     postgres: {
//       connection: {
//         connectionString: env('DATABASE_URL'),
//         host: env('DATABASE_HOST', 'localhost'),
//         port: env.int('DATABASE_PORT', 5432),
//         database: env('DATABASE_NAME', 'strapi'),
//         user: env('DATABASE_USERNAME', 'strapi'),
//         password: env('DATABASE_PASSWORD', 'strapi'),
//         ssl: env.bool('DATABASE_SSL', false) && {
//           key: env('DATABASE_SSL_KEY', undefined),
//           cert: env('DATABASE_SSL_CERT', undefined),
//           ca: env('DATABASE_SSL_CA', undefined),
//           capath: env('DATABASE_SSL_CAPATH', undefined),
//           cipher: env('DATABASE_SSL_CIPHER', undefined),
//           rejectUnauthorized: env.bool(
//             'DATABASE_SSL_REJECT_UNAUTHORIZED',
//             true
//           ),
//         },
//         schema: env('DATABASE_SCHEMA', 'public'),
//       },
//       pool: {
//         min: env.int('DATABASE_POOL_MIN', 2),
//         max: env.int('DATABASE_POOL_MAX', 10),
//         idleTimeoutMillis: env.int('DATABASE_POOL_IDLE_TIMEOUT', 30000), // Time after which idle connections will be closed
//       },
//     },
//     sqlite: {
//       connection: {
//         filename: path.join(
//           __dirname,
//           '..',
//           env('DATABASE_FILENAME', '.tmp/data.db')
//         ),
//       },
//       useNullAsDefault: true,
//     },
//   };

//   return {
//     connection: {
//       client,
//       ...connections[client],
//       acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
//     },
//   };
// };

module.exports = () => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'pg-318856b7-lfreturnme-d0fa.i.aivencloud.com',
      port: 10436,
      database: 'defaultdb',
      user: 'avnadmin',
      password: 'AVNS_TBmFda3jjh6jSVH5Zal',
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
