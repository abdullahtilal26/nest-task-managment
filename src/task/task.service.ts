import { Injectable } from '@nestjs/common';
import { Task,TaskStatus } from './task.model';
import * as uuid from "uuid";
@Injectable()
export class TaskService {
    tasks:Task[]=[];

    getAllTasks():Task[]{
        return this.tasks
    }

    createTask(title:string,description:string):Task{
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
