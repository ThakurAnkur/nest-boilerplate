export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  isDev: process.env.IS_DEV,
  isProduction: process.env.IS_PRODUCTION,
  isTest: process.env.IS_TEST,
  isReview: process.env.IS_REVIEW,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  },
});
