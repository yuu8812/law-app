import { Migration } from '@mikro-orm/migrations';

export class Migration20230830114000 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table `user` drop primary key;');
    this.addSql(
      'alter table `user` change `_id` `uuid` varchar(255) not null;',
    );
    this.addSql('alter table `user` add primary key `user_pkey`(`uuid`);');
  }

  async down(): Promise<void> {
    this.addSql('alter table `user` drop primary key;');
    this.addSql(
      'alter table `user` change `uuid` `_id` varchar(255) not null;',
    );
    this.addSql('alter table `user` add primary key `user_pkey`(`_id`);');
  }
}
