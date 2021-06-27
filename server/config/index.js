const env = process.env;

const config = {
  db: {
    host: env.DB_HOST,
    user: "root",
    password: "cogoport",
    database: env.DB_NAME,
  },
};

module.exports = config;
