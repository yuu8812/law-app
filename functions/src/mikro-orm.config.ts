import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { MySqlDriver } from '@mikro-orm/mysql';

const logger = new Logger('MikroORM');
const config: Options<MySqlDriver> = {
  driver: MySqlDriver,
  entities: ['./dist/entities'],
  entitiesTs: ['./src/entities'],
  metadataProvider: TsMorphMetadataProvider,
  dbName: 'mikro-orm-nest-ts',
  type: 'mysql',
  port: 3307,
  highlighter: new SqlHighlighter(),
  debug: true,
  logger: logger.log.bind(logger),
  baseDir: process.cwd(),
};

export default config;
