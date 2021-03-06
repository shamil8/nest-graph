import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AppService } from '../app.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService, AppService],
  controllers: [UserController],
  exports: [],
})
export class UserModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): any {
    consumer;
  }
}
