import { User } from '../../domain/entities/user';

class UserCreateDto {

  name:string;

  dataToEntity(user: User): User {
    user.name = this.name;
  }

}