import { Entity, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';

Entity();
export class Law {
  @PrimaryKey()
  id!: string;

  @Property()
  category!: string;

  @Property()
  promulgationDate!: string;

  @Property()
  enforceMentDate!: string;
}
