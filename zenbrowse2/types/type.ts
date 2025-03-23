export interface Task {
    task: string;
    date : string;
    reminder : string; //date
    status : TaskStatus;
}

export enum TaskStatus{
    Completed = "Completed",
    Pending = "Pending",
    RemindLater = "RemindLater"
}

export interface App{
    title : string,
    URL : string,
    useCount : number
}