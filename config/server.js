module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '567f8abfb2819bd8bd1aa706fdb24d9e'),
    },
  },
});
const server = new ApolloServer({ typeDefs, resolvers });

const port = 1337;

server.listen({ port });