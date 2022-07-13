import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import { ETaskStatus } from './task.model.js';
import { TasksService } from './tasks.service.js';

@Controller('tasks') // - this is responsible for the tasks/ endpoint
export class TasksController {
  constructor(private tasksService: TasksService) {
    // -tasksService will be added to this.taskService
  }

  @Get()
  getAllTasks() {
    return this.tasksService.getAll();
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.tasksService.getTaskById(id);
  }

  @Post('/create')
  createTask(@Body('title') title: string, @Body('description') description: string) {
    return this.tasksService.create(title, description);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTaskById(id);
  }

  @Patch()
  updateTask(@Body('id') id: string, @Body('title') title: string, @Body('description') description: string, @Body('status') status: ETaskStatus) {
    return this.tasksService.updateTaskById(id, title, description, status);
  }
}
