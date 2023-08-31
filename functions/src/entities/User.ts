import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 } from 'uuid';

@Entity()
export class User {
  @PrimaryKey({})
  uuid = v4();

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
