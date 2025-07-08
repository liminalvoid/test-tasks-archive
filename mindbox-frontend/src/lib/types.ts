export type Filter = "all" | "active" | "completed";

export interface ITask {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}
