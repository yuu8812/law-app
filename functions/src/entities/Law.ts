import { Entity, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 } from 'uuid';

Entity();
export class Law {
  @PrimaryKey()
  uuid = v4();

  @Property()
  category!: string;

  @Property()
  promulgationDate!: string;

  @Property()
  enforceMentDate!: string;
}
