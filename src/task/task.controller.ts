import { Controller,Get,Post,Body, Param, Delete, Patch } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task, TaskStatus } from './task.model';
import { CreatTaskDto } from './dto/creat-task-dto';

//here controller decorater annotate class ,defining this is the controller and the argument passed is the route that should be handled by this controller
@Controller('task')
export class TaskController {
    constructor(private taskService:TaskService){

    }

    @Get()
    getAllTasks():Task[]{
        return this.taskService.getAllTasks()
    }

    //request paramtere example
    //one way
    // @Get(":id")

    //another way
    @Get("/:id")
    getTaskById(@Param("id") id:string):Task{
        console.log(typeof id)
        //do i need to define string for "id" type?
        return this.taskService.getTaskById(id);
    }

    @Post()
    //One way to get body data
    // creatTask(@Body() body){
    //     console.log("body",body)
    // }

    //Onther way
    // creatTask(@Body("title") title,@Body("description") description):Task{
    //     console.log(title,description)
    //     return this.taskService.createTask(title,description)
    // }

    //DTO WAY
     creatTask(@Body() creatTaskDto:CreatTaskDto):Task{
        console.log(creatTaskDto.title,creatTaskDto.description)
        return this.taskService.createTask(creatTaskDto)
    }

    @Delete("/:id")
    deleteTaskById(@Param("id") id:string):Task[]{
        return this.taskService.deleteTaskById(id)
    }

    @Patch("/:id/status")
    updateTaskStatus(@Param("id") id:string,@Body("status") status:TaskStatus):Task{
        //whast the point of having the enum type on status as I can pass any value thats not part of enum?
       return this.taskService.updateTaskStatus(id,status)
    }
}
