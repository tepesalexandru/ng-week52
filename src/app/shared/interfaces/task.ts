export interface ITask {
    id: string;
    label: string;
    tasks: ITask[];
    minutesRequired: number;
}