import { Body, Controller, Delete, Get, Param, Post, Patch, Query } from '@nestjs/common';
import { ETaskStatus, ITask } from './tasks.model.js';
import { TasksService } from './tasks.service.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { GetTaskFilterDto } from './dto/get-tasks-filter.dto.js';

@Controller('tasks') // - this is responsible for the tasks/ endpoint
export class TasksController {
  constructor(private tasksService: TasksService) {
    // -tasksService will be added to this.taskService
  }

  @Get()
  getTasks(@Query() filterDto: GetTaskFilterDto) {
    return this.tasksService.getTasks(filterDto);
  }


  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.tasksService.getTaskById(id);
  }

  @Post('/create')
  createTask(@Body() createTaskDto: CreateTaskDto): ITask {
    return this.tasksService.create(createTaskDto);
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
