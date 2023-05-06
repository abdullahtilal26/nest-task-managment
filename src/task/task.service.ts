import { Injectable, NotFoundException } from '@nestjs/common';
import { Task,TaskStatus } from './task.model';
import * as uuid from "uuid";
import { CreatTaskDto } from './dto/creat-task-dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
@Injectable()
export class TaskService {
    tasks:Task[]=[];

    getAllTasks():Task[]{
        return this.tasks
    }

    getAllFilteredTasks(filterDto:GetTaskFilterDto):Task[]{
        const {status,search}=filterDto
        let tasks:Task[]=this.getAllTasks();
        if(status){
            tasks=tasks.filter(task=>task.status===status)
        }
        if(search){
            tasks=tasks.filter(task=>(task.title.includes(search)||task.description.includes(search)))
        }
        return tasks
    }

    getTaskById(id:string):Task{
        const found= this.tasks.find(task=>task.id===id)

        if(!found){
            throw new NotFoundException(`Cannot find task with id ${id}`)
        }

        return found
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
        const found=this.getTaskById(id)
        this.tasks=this.tasks.filter(task=>task.id!==found.id)
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
