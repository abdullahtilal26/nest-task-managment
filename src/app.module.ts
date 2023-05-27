import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm/dist';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),TaskModule],

})
export class AppModule {}
