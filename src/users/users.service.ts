import { Injectable } from '@nestjs/common';

export type User = {
  id: number,
  name: string,
  username: string,
  password: string
};
@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'DauNamPC',
      username: 'namdau1102',
      password: '229214'
    },
    {
      id: 2,
      name: 'ConMeuDen',
      username: 'meuden112',
      password: '68158'
    }
  ]
  async findOnne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}

