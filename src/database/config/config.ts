import { type Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER ?? 'root',
  password: process.env.DB_PASS ?? 'root',
  database: process.env.DB_NAME ?? 'database',
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT) ?? 5432,
  dialect: 'postgres',
  dialectOptions: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timezone: 'America/Sao_Paulo',
  },
};

export = config;
