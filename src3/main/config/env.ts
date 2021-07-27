export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://mongo:27017/node-api',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || 'tj12==Ab1Q'
}