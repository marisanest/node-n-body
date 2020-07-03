module.exports = {
  apps : [{
    name: 'n-body',
    script: './server.js',
    watch: false,
    env         : {
      "NODE_ENV": "production",
    }
  }]
};
