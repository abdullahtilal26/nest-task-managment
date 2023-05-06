import { IsNotEmpty } from "class-validator"
export class CreatTaskDto{
    @IsNotEmpty()
    title:string
     @IsNotEmpty()
    description:string
}

//DTO makes it easier to maintain the shape of data that is circulated across the application and introduce new changes to this sort of data