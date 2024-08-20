module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'OeRcAtVQnRlnPeiYl5HcfW=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'fuiA57Nzw/BYsMgh7kuAKg=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'Z4xEVoS5hH5wQmRdRpSuPQ=='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
