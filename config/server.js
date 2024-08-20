module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['bn27HXtXaKxZpIuQs/g6VvJGv9cM/iDdEwxsFZHsDwE=', '8r6djtScqAIHB1Vqf532YrHUF+LvWSUPkKVKdNVqGZQ=']),
  },

  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
