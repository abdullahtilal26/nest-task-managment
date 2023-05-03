import { Injectable } from '@nestjs/common';
import { Task,TaskStatus } from './task.model';
import * as uuid from "uuid";
import { CreatTaskDto } from './dto/creat-task-dto';
@Injectable()
export class TaskService {
    tasks:Task[]=[];

    getAllTasks():Task[]{
        return this.tasks
    }

    createTask(creatTaskDto:CreatTaskDto):Task{
        const {title,description}=creatTaskDto
        const newTask:Task={
            id:uuid.v4(),
            title,
            description,
            status:TaskStatus.OPEN,
          

        }

        this.tasks.push(newTask);
        return newTask
    }
}
