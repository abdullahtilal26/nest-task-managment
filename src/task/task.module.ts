import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskRepository } from './task.repository';

@Module({
  imports:[TypeOrmModule.forFeature([TaskRepository])],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}
