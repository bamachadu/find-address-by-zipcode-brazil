module.exports = {
  apps : [{
    name: "find-zipcode-brazil",
    script: "./index.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}