import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async getHello() {
    const url = 'https://elaws.e-gov.go.jp/api/1/lawdata/昭和二十一年憲法';
    const { data } = await axios.get(url);
    return data;
  }
}
