import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../@services/user.service';
import { User } from '../../../../../back/src/user/domain/entities/user';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ListStore]
})
export class ListComponent implements OnInit {

  private users$?: Observable<User[]>;
  private subs?: Subscription

  constructor(
    private activedRouter: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.users$ = this.activedRouter.paramMap.pipe(
      switchMap((params) => this.userService.list())
    );
  }

}
