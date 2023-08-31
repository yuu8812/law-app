import { EntityManager } from '@mikro-orm/mysql';
import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { User } from './entities/User';

@Injectable()
export class AppService {
  constructor(private readonly em: EntityManager) {}
  async getHello() {
    const url = 'https://elaws.e-gov.go.jp/api/1/lawdata/昭和二十一年憲法';
    const { data } = await axios.get(url);
    const repository = this.em.getRepository(User);
    const res = repository.create({
      userName: 'mister2',
      email: 'fff@ggg.com',
    });
    Logger.log(JSON.stringify(res));
    const res2 = repository.findAll();
    Logger.log(JSON.stringify(res2));
    return data;
  }
}
