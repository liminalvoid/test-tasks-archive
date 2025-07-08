import React, { useState } from "react";

import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import type { ITask } from "@/lib/types";

interface DialogPopup {
    tasks: ITask[];
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function DialogPopup({ tasks, setTasks }: DialogPopup) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleClick = () => {
        const lastTaskIdx = tasks.length - 1
        const newId = lastTaskIdx < 0 ? 0 : tasks[lastTaskIdx].id + 1;

        const newTask: ITask = {
            id: newId,
            title,
            description,
            completed: false,
        };

        setTasks([...tasks, newTask]);

        setTitle("");
        setDescription("");
    };

    return (
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Add todo</DialogTitle>
                <DialogDescription>
                    What&apos;s on your mind today?
                </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4">
                <div className="grid gap-3">
                    <Label htmlFor="title-1">Title</Label>
                    <Input
                        id="title-1"
                        name="title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder="Word takeover"
                    />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="description-1">Description</Label>
                    <Input
                        id="description-1"
                        name="description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        placeholder="Probably I would need some bananas..."
                    />
                </div>
            </div>

            <DialogFooter>
                <DialogClose asChild>
                    <Button type="button" variant="outline">
                        Cancel
                    </Button>
                </DialogClose>
                <DialogClose asChild>
                    <Button type="submit" onClick={handleClick}>
                        Save changes
                    </Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    );
}

export default DialogPopup;
