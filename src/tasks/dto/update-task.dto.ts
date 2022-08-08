import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ETaskStatus } from '../tasks.model.js';

export class UpdateTaskDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  title: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  status: ETaskStatus;
}
