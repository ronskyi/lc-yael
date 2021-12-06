import { Module } from '@nestjs/common';
import { AppController } from './resourses/controllers/app.controller';
import { UserService } from './domain/services/user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [UserService],
})
export class AppModule {}
