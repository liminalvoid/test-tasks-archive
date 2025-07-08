import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import type { ITask } from "@/lib/types";

export const fakeTasks: ITask[] = [
    {
        id: 0,
        title: "Do homework",
        description: "Math, English, Algebra",
        completed: false,
    },
    {
        id: 1,
        title: "Do chores",
        description: "There's a lot of plates...",
        completed: false,
    },
    {
        id: 2,
        title: "Go for a walk",
        description: "Park probably?",
        completed: false,
    },
];

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
