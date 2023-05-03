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

    getTaskById(id:string):Task{
        return this.tasks.find(task=>task.id===id)
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

    deleteTaskById(id:string):Task[]{
        this.tasks=this.tasks.filter(task=>task.id!==id)
        return this.tasks

    }

     updateTaskStatus(id:string,status:TaskStatus):Task{
        let updatedTask:Task=this.getTaskById(id);
        this.tasks=this.tasks.map((task):Task=>{
            if(task.id===id){
                task.status=status
                updatedTask.status=status
            }

            return task
        })
        return updatedTask

    }
}
