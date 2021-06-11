module.exports = ({ env }) => ({
  host: env('HOST', 'https://monumentosdb.herokuapp.com'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '35c4cf290300bb0680a35f0ae40bfb3e'),
    },
  },
});
