import {
  Collection,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';

@Entity()
export class User {
  @PrimaryKey()
  id!: string;

  @Property()
  userName!: string;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  lastLoggedInAt = new Date();

  @Property()
  email!: string;

  @Property()
  age?: number;

  @Property()
  emailVerified = false;

  @Property()
  termsAccepted = false;
}
