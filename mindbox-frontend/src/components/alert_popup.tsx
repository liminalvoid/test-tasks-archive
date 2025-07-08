import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import type { ITask } from "@/lib/types";

interface AlertPopupProps {
    tasks: ITask[];
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function AlertPopup({ tasks, setTasks }: AlertPopupProps) {
    const onButtonClick = () => {
        const uncompletedTasks = tasks.filter(task => !task.completed);

        setTasks(uncompletedTasks);
    };

    return (
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your completed tasks.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction variant="destructive" onClick={onButtonClick}>
                    Continue
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    );
}

export default AlertPopup;
