import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks') // - this is responsible for the tasks/ endpoint
export class TasksController {
  constructor(private tasksService: TasksService) {
    // -tasksService will be added to this.taskService
  }

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }
}
