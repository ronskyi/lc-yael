import { Injectable } from '@nestjs/common';
import { User } from '../entities/user';
import { EntityNotFoundException } from '../../../@common/domain/errors/entity-not-found.exception';

@Injectable()
export class UserService {

  constructor(
    private readonly repo: UserRepo,
    private readonly authService,
    private readonly validator,
  ) {
  }

  private usersData: User[] = [

  ];

  async getList(query: UserFindQuery, pagination: Pagination, user: AuthUser): Promise<User[]> {
    this.authService.checkAndThrow(user, 'user:list');
    return  this.repo.findByQuery(query, pagination)
  }

  async create(user: User): Promise<any> {
    this.authService.checkAndThrow(user, 'user:create');
    return this.repo.saveEntity(user);
  }

  async getById(id: string): Promise<any> {
    const user = await this.repo.findById(id);
    if (null === user) {
      throw new EntityNotFoundException();
    }
    this.authService.checkAndThrow(user, 'user:create');
    return this.repo.saveEntity(user);
  }
}
