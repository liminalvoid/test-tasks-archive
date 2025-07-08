import { useEffect, useState } from "react";

import { Plus } from "lucide-react";

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import type { ITask, Filter } from "@/lib/types";
import { fakeTasks } from "@/lib/utils";

import Task from "@/components/task";
import FilterButton from "@/components/filter_button";
import AlertPopup from "@/components/alert_popup";
import DialogPopup from "@/components/dialog_popup";

const buttons = [
    { title: "All", type: "all" },
    { title: "Active", type: "active" },
    { title: "Completed", type: "completed" },
];

function App() {
    const [filter, setFilter] = useState<Filter>("all");
    const [tasks, setTasks] = useState<ITask[]>(() => {
        const localTasks = localStorage.getItem("tasks");

        if (!localTasks) {
            return fakeTasks;
        }

        const jsonLocalTasks = JSON.parse(localTasks);

        return jsonLocalTasks;
    });

    const filteredTasks = tasks.filter((task) => {
        if (filter === "active") {
            return task.completed === false;
        } else if (filter === "completed") {
            return task.completed === true;
        }

        return true;
    });

    const tasksCards = filteredTasks.map(
        ({ id, title, description, completed }) => (
            <Task
                key={id}
                id={id}
                title={title}
                description={description}
                completed={completed}
                tasks={tasks}
                setTasks={setTasks}
            />
        )
    );
    const filterButtons = buttons.map(({ title, type }, index) => (
        <FilterButton
            key={index}
            title={title}
            type={type as Filter}
            currentFilter={filter}
            setType={setFilter}
        />
    ));

    const remainingTasksCount = tasks.filter((task) => !task.completed).length;
    const remainingTasksMessage =
        remainingTasksCount <= 0
            ? "There is nothing to do! You're great!"
            : `There is ${remainingTasksCount} tasks to do`;

    const noTasksMessage =
        tasksCards.length === 0 ? "There is no tasks" : tasksCards;

    useEffect(() => {
        const tasksString = JSON.stringify(tasks);

        localStorage.setItem("tasks", tasksString);
    }, [tasks]);

    return (
        <main className="flex justify-center items-center h-dvh">
            <Dialog>
                <AlertDialog>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-4xl font-bold">
                                Todo App
                            </CardTitle>
                            <CardDescription>
                                {remainingTasksMessage}
                            </CardDescription>
                            <CardAction>
                                <DialogTrigger asChild>
                                    <Button
                                        className="size-12"
                                        variant="ghost"
                                        size="icon"
                                    >
                                        <Plus
                                            className="size-8"
                                            size={64}
                                            strokeWidth={1}
                                        />
                                    </Button>
                                </DialogTrigger>
                            </CardAction>
                        </CardHeader>

                        <CardContent className="flex flex-col gap-4 overflow-scroll max-h-120">
                            {noTasksMessage}
                        </CardContent>

                        <CardFooter className="flex justify-between">
                            <div>{filterButtons}</div>

                            <AlertDialogTrigger asChild>
                                <Button
                                    className="text-red-600"
                                    variant="ghost"
                                >
                                    Clear completed
                                </Button>
                            </AlertDialogTrigger>
                        </CardFooter>
                    </Card>

                    <AlertPopup tasks={tasks} setTasks={setTasks} />

                    <DialogPopup tasks={tasks} setTasks={setTasks} />
                </AlertDialog>
            </Dialog>
        </main>
    );
}

export default App;
