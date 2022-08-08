import { Body, Controller, Delete, Get, Param, Post, Patch, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ETaskStatus, ITask } from './tasks.model.js';
import { TasksService } from './tasks.service.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { GetTaskFilterDto } from './dto/get-tasks-filter.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';
import { TaskValidationPipe } from './pipes/task-status-validation.pipe.js';

@Controller('tasks') // - this is responsible for the tasks/ endpoint
export class TasksController {
  constructor(private tasksService: TasksService) {
    // -tasksService will be added to this.taskService
  }

  @Get('/')
  getTasks(@Query() filterDto: GetTaskFilterDto) {
    return this.tasksService.getTasks(filterDto);
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.tasksService.getTaskById(id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  createTask(@Body() createTaskDto: CreateTaskDto): ITask {
    return this.tasksService.create(createTaskDto);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTaskById(id);
  }

  @Patch('/')
  updateTask(@Body(TaskValidationPipe) updateTaskDto: UpdateTaskDto) {
    return this.tasksService.updateTask(updateTaskDto);
  }
}
