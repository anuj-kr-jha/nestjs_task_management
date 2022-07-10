import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { Tasks2Controller } from './tasks2/tasks2.controller';

@Module({
  imports: [TasksModule],
  controllers: [Tasks2Controller],
})
export class AppModule {}
