import { ETaskStatus } from "../tasks.model.js";

export class GetTaskFilterDto {
    status: ETaskStatus;
    search: string;
}