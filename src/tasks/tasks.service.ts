import { Injectable } from '@nestjs/common';
import { ETaskStatus, ITask } from './task.model.js';
// import { nanoid } from 'nanoid';

@Injectable()
export class TasksService {
  private tasks: ITask[] = [];

  getAll(): ITask[] {
    return this.tasks;
  }

  getTaskById(id: string): ITask | Record<string, never> {
    const task = this.tasks.find((t) => t.id == id);
    return task ?? {};
  }

  deleteTaskById(id: string): ITask | Record<string, never> {
    const taskIndex = this.tasks.findIndex((t) => t.id == id);
    const [task] = this.tasks.splice(taskIndex, 1);
    return task ?? {};
  }

  updateTaskById(id: string, title: string, description: string, status: ETaskStatus): ITask | Record<string, never> {
    const taskIndex = this.tasks.findIndex((t) => t.id == id);
    this.tasks[taskIndex].title = title ?? this.tasks[taskIndex].title;
    this.tasks[taskIndex].description = description ?? this.tasks[taskIndex].description;
    this.tasks[taskIndex].status = status ?? this.tasks[taskIndex].status;
    return this.tasks[taskIndex] ?? {};
  }

  create(title: string, description: string): ITask {
    const task: ITask = {
      // id: nanoid(5), // - require() of ES Module not supported. Instead change the require of index.js to a dynamic import() which is available in all CommonJS modules.
      id: (this.tasks.length + 1).toString(),
      title: title,
      description: description,
      status: ETaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}
