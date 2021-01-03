import { ITask } from './task';

export interface IGoal {
    id: string;
    label: string;
    tasks: ITask[];
}
