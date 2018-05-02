const env = process.env.NODE_ENV || 'development';
console.log('*** current environment ***', env);

if (env === 'development' || env === 'test') {
  const config = require('./config.json');
  //takes the relative values given the value of env
  const envConfig = config[env];
  // => [PORT, MONGODB_URI];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
    //process.env.PORT = envConfig.PORT;
    //process.env.MONGODB_URI = envConfig.MONGODB_URI;
  });
}
