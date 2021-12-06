import { Injectable, Query } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

class Collection<T> {
  items: T[];
  total: number;
}

@Injectable()
export class UserService {

  constructor(private readonly http: HttpClient) {
  }

  list(find: UserQuery, pagination: Pagination): Observable<Collection<User>> {
    this.http.get('/users', {
      ...find, ...pagination
    });
  }
}

