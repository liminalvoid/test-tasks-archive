import React from "react";

import type { ITask } from "@/lib/types";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface TaskProps {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    tasks: ITask[];
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export default function Task({
    id,
    title,
    description,
    tasks,
    setTasks,
}: TaskProps) {
    const currentTask = tasks.find((task) => task.id === id);

    const checked = currentTask ? currentTask.completed : false;
    
    const onChecked = () => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const idString = `task-${id}`;

    return (
        <div className="flex items-start gap-3">
            <Checkbox
                id={idString}
                checked={checked}
                onCheckedChange={onChecked}
            />

            <div className="grid gap-2">
                <Label
                    className={`${checked ? "line-through" : ""}`}
                    htmlFor={idString}
                >
                    {title}
                </Label>
                <p
                    className={`text-muted-foreground text-sm ${
                        checked ? "line-through" : ""
                    }`}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}
