/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url:'postgresql://StudyAI_owner:2dgyMrzxGb7B@ep-icy-unit-a1juvxo1.ap-southeast-1.aws.neon.tech/StudyAI?sslmode=require',
  }
};