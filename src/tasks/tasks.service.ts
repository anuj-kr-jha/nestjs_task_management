import { Injectable, NotFoundException } from '@nestjs/common';
import { ETaskStatus, ITask } from './tasks.model.js';
import { nanoid } from 'nanoid';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { GetTaskFilterDto } from './dto/get-tasks-filter.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';

@Injectable()
export class TasksService {
  private tasks: ITask[] = [];

  getTasks(filterDto: GetTaskFilterDto): ITask[] {
    if (!Object.keys(filterDto).length) return this.tasks;
    const { status, search } = filterDto;
    let tasks = this.tasks;
    if (status) tasks = tasks.filter((t) => t.status == status);
    if (search) tasks = tasks.filter((t) => t.title.includes(search) || t.description.includes(search));
    return tasks;
  }

  getTaskById(id: string): ITask | Record<string, never> {
    const task = this.tasks.find((t) => t.id == id);
    if (!task) throw new NotFoundException(`Task with id ${id} not found`);
    return task;
  }

  deleteTaskById(id: string): ITask | Record<string, never> {
    const taskIndex = this.tasks.findIndex((t) => t.id == id);
    const [task] = this.tasks.splice(taskIndex, 1);
    return task ?? {};
  }

  updateTask(updateTaskDto: UpdateTaskDto): ITask | Record<string, never> {
    const { id, title, description, status } = updateTaskDto;

    const task = this.getTaskById(id);
    task.title = title ?? task.title;
    task.description = description ?? task.description;
    task.status = status ?? task.status;
    return task;
  }

  create(createTaskDto: CreateTaskDto): ITask {
    const { title, description } = createTaskDto;
    const task: ITask = {
      id: nanoid(5),
      title: title,
      description: description,
      status: ETaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}
