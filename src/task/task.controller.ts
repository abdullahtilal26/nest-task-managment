import { Controller,Get,Post,Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.model';

//here controller decorater annotate class ,defining this is the controller and the argument passed is the route that should be handled by this controller
@Controller('task')
export class TaskController {
    constructor(private taskService:TaskService){

    }

    @Get()
    getAllTasks():Task[]{
        return this.taskService.getAllTasks()
    }

    @Post()
    //One way to get body data
    // creatTask(@Body() body){
    //     console.log("body",body)
    // }
    creatTask(@Body("title") title,@Body("description") description):Task{
        console.log(title,description)
        return this.taskService.createTask(title,description)
    }
}
