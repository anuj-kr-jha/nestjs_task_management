import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller.js';
import { TasksService } from './tasks.service.js';

@Module({
  controllers: [TasksController], // register controller
  providers: [TasksService], // register service aka provider
})
export class TasksModule {}
