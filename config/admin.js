module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8575409a0f859f998db16b22a1620277'),
  },
});
