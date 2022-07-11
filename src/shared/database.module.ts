import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: config.dbUrl,
      autoLoadEntities: true,
      synchronize: true, // DEV only, do not use on PROD!
    }),
  ],
})
export default class DatabaseModule {}
