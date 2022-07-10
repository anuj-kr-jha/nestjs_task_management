import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController], // register controller
  providers: [TasksService], // register service aka provider
})
export class TasksModule {}
