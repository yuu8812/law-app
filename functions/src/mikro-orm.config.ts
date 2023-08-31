import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { MySqlDriver } from '@mikro-orm/mysql';

const logger = new Logger('MikroORM');
const config: Options<MySqlDriver> = {
  driver: MySqlDriver,
  entities: ['./dist/src/entities'],
  entitiesTs: ['./src/entities'],
  metadataProvider: TsMorphMetadataProvider,
  dbName: 'authentic-law',
  type: 'mysql',
  port: 3306,
  password: 'password',
  user: 'user',
  timezone: 'local',
  highlighter: new SqlHighlighter(),
  debug: true,
  logger: logger.log.bind(logger),
  baseDir: process.cwd(),
  migrations: {
    path: './src/migrations',
    transactional: true,
    disableForeignKeys: true,
    allOrNothing: true,
    dropTables: true,
    safe: false,
    emit: 'ts',
  },
};

export default config;
