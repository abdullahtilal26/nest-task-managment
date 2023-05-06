import {PipeTransform,ArgumentMetadata, BadRequestException} from "@nestjs/common"
import { TaskStatus } from "../task.model"
export class TaskStatusValidationPipe implements PipeTransform{

     readonly allowedStatuses=[
            TaskStatus.OPEN,
            TaskStatus.IN_PROGRESS,
            TaskStatus.DONE
        ]

    transform(value:any,metaData:ArgumentMetadata){
        value=value.toUpperCase()
       if(!this.isStatusValid(value)){
            throw new BadRequestException(`Value provided ${value} is invalid`)
       }
       return value
    }

    private isStatusValid(status:any):boolean{
        return this.allowedStatuses.includes(status)
    }
}