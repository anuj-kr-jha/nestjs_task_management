import { ArgumentMetadata, BadRequestException, PipeTransform } from '@nestjs/common';
import { ETaskStatus } from '../tasks.model.js';

export class TaskValidationPipe implements PipeTransform {
  readonly allowedStatuses = [ETaskStatus.DONE, ETaskStatus.OPEN, ETaskStatus.IN_PROGRESS];
  transform(value: any, metadata: ArgumentMetadata) {
    let { status } = value;
    status = status.toUpperCase();
    if (!this.isStatusValid(status)) throw new BadRequestException(`${status} is an invalid status`);
    return value;
  }

  private isStatusValid(status: any) {
    return this.allowedStatuses.includes(status);
  }
}
