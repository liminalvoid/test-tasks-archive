import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "@/App";
import AlertPopup from "@/components/alert_popup";
import DialogPopup from "@/components/dialog_popup";
import type { ITask } from "@/lib/types";

// Mock localStorage
const localStorageMock = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
};

Object.defineProperty(window, "localStorage", {
    value: localStorageMock,
});

// Mock the UI components
vi.mock("@/components/ui/card", () => ({
    Card: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="card">{children}</div>
    ),
    CardAction: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="card-action">{children}</div>
    ),
    CardContent: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="card-content">{children}</div>
    ),
    CardDescription: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="card-description">{children}</div>
    ),
    CardFooter: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="card-footer">{children}</div>
    ),
    CardHeader: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="card-header">{children}</div>
    ),
    CardTitle: ({ children }: { children: React.ReactNode }) => (
        <h1 data-testid="card-title">{children}</h1>
    ),
}));

vi.mock("@/components/ui/dialog", () => ({
    Dialog: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="dialog">{children}</div>
    ),
    DialogTrigger: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="dialog-trigger">{children}</div>
    ),
    DialogContent: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="dialog-content">{children}</div>
    ),
    DialogHeader: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="dialog-header">{children}</div>
    ),
    DialogTitle: ({ children }: { children: React.ReactNode }) => (
        <h2 data-testid="dialog-title">{children}</h2>
    ),
    DialogDescription: ({ children }: { children: React.ReactNode }) => (
        <p data-testid="dialog-description">{children}</p>
    ),
    DialogFooter: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="dialog-footer">{children}</div>
    ),
    DialogClose: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="dialog-close">{children}</div>
    ),
}));

vi.mock("@/components/ui/alert-dialog", () => ({
    AlertDialog: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="alert-dialog">{children}</div>
    ),
    AlertDialogTrigger: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="alert-dialog-trigger">{children}</div>
    ),
    AlertDialogContent: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="alert-dialog-content">{children}</div>
    ),
    AlertDialogHeader: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="alert-dialog-header">{children}</div>
    ),
    AlertDialogTitle: ({ children }: { children: React.ReactNode }) => (
        <h3 data-testid="alert-dialog-title">{children}</h3>
    ),
    AlertDialogDescription: ({ children }: { children: React.ReactNode }) => (
        <p data-testid="alert-dialog-description">{children}</p>
    ),
    AlertDialogFooter: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="alert-dialog-footer">{children}</div>
    ),
    AlertDialogAction: ({
        children,
        onClick,
    }: {
        children: React.ReactNode;
        onClick?: () => void;
    }) => (
        <button data-testid="alert-dialog-action" onClick={onClick}>
            {children}
        </button>
    ),
    AlertDialogCancel: ({ children }: { children: React.ReactNode }) => (
        <button data-testid="alert-dialog-cancel">{children}</button>
    ),
}));

vi.mock("@/components/ui/button", () => ({
    Button: ({
        children,
        onClick,
        ...props
    }: {
        children: React.ReactNode;
        onClick?: () => void;
    }) => (
        <button data-testid="button" onClick={onClick} {...props}>
            {children}
        </button>
    ),
}));

vi.mock("@/components/ui/input", () => ({
    Input: ({ value, onChange, ...props }: any) => (
        <input
            data-testid="input"
            value={value}
            onChange={onChange}
            {...props}
        />
    ),
}));

vi.mock("@/components/ui/label", () => ({
    Label: ({ children, ...props }: { children: React.ReactNode }) => (
        <label data-testid="label" {...props}>
            {children}
        </label>
    ),
}));

vi.mock("lucide-react", () => ({
    Plus: () => <div data-testid="plus-icon">+</div>,
}));

// Mock child components
vi.mock("@/components/task", () => ({
    default: ({ id, title, description, completed }: ITask) => (
        <div data-testid={`task-${id}`}>
            <span data-testid={`task-title-${id}`}>{title}</span>
            <span data-testid={`task-description-${id}`}>{description}</span>
            <span data-testid={`task-completed-${id}`}>
                {completed ? "completed" : "active"}
            </span>
        </div>
    ),
}));

vi.mock("@/components/filter_button", () => ({
    default: ({ title, type, currentFilter, setType }: any) => (
        <button
            data-testid={`filter-${type}`}
            onClick={() => setType(type)}
            className={currentFilter === type ? "active" : ""}
        >
            {title}
        </button>
    ),
}));

vi.mock("@/lib/utils", () => ({
    fakeTasks: [
        {
            id: 1,
            title: "Test Task 1",
            description: "Description 1",
            completed: false,
        },
        {
            id: 2,
            title: "Test Task 2",
            description: "Description 2",
            completed: true,
        },
    ],
}));

describe("App Component", () => {
    beforeEach(() => {
        localStorageMock.getItem.mockClear();
        localStorageMock.setItem.mockClear();
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it("loads tasks from localStorage when available", () => {
        const savedTasks = JSON.stringify([
            {
                id: 1,
                title: "Saved Task",
                description: "From localStorage",
                completed: false,
            },
        ]);
        localStorageMock.getItem.mockReturnValue(savedTasks);

        render(<App />);

        expect(localStorageMock.getItem).toHaveBeenCalledWith("tasks");
        expect(screen.getByTestId("task-1")).toBeInTheDocument();
        expect(screen.getByTestId("task-title-1")).toHaveTextContent(
            "Saved Task"
        );
    });

    it("displays correct remaining tasks count", () => {
        localStorageMock.getItem.mockReturnValue(null);

        render(<App />);

        // From fakeTasks, only 1 task is not completed
        expect(screen.getByTestId("card-description")).toHaveTextContent(
            "There is 1 tasks to do"
        );
    });

    it("displays completion message when no tasks remaining", () => {
        const completedTasks = JSON.stringify([
            {
                id: 1,
                title: "Task 1",
                description: "Description 1",
                completed: true,
            },
            {
                id: 2,
                title: "Task 2",
                description: "Description 2",
                completed: true,
            },
        ]);
        localStorageMock.getItem.mockReturnValue(completedTasks);

        render(<App />);

        expect(screen.getByTestId("card-description")).toHaveTextContent(
            "There is nothing to do! You're great!"
        );
    });

    it("filters tasks by active status", async () => {
        localStorageMock.getItem.mockReturnValue(null);
        render(<App />);

        const activeFilter = screen.getByTestId("filter-active");
        fireEvent.click(activeFilter);

        // Should only show active tasks (task-1 is active, task-2 is completed)
        expect(screen.getByTestId("task-1")).toBeInTheDocument();
        expect(screen.queryByTestId("task-2")).not.toBeInTheDocument();
    });

    it("filters tasks by completed status", async () => {
        localStorageMock.getItem.mockReturnValue(null);
        render(<App />);

        const completedFilter = screen.getByTestId("filter-completed");
        fireEvent.click(completedFilter);

        // Should only show completed tasks (task-2 is completed, task-1 is active)
        expect(screen.queryByTestId("task-1")).not.toBeInTheDocument();
        expect(screen.getByTestId("task-2")).toBeInTheDocument();
    });

    it('shows all tasks when "all" filter is selected', async () => {
        localStorageMock.getItem.mockReturnValue(null);
        render(<App />);

        const allFilter = screen.getByTestId("filter-all");
        fireEvent.click(allFilter);

        expect(screen.getByTestId("task-1")).toBeInTheDocument();
        expect(screen.getByTestId("task-2")).toBeInTheDocument();
    });

    it("saves tasks to localStorage when tasks change", async () => {
        localStorageMock.getItem.mockReturnValue(null);
        render(<App />);

        await waitFor(() => {
            expect(localStorageMock.setItem).toHaveBeenCalledWith(
                "tasks",
                expect.stringContaining("Test Task 1")
            );
        });
    });
});

describe("AlertPopup Component", () => {
    const mockSetTasks = vi.fn();

    beforeEach(() => {
        mockSetTasks.mockClear();
    });

    const mockTasks: ITask[] = [
        {
            id: 1,
            title: "Active Task",
            description: "Description 1",
            completed: false,
        },
        {
            id: 2,
            title: "Completed Task",
            description: "Description 2",
            completed: true,
        },
        {
            id: 3,
            title: "Another Active Task",
            description: "Description 3",
            completed: false,
        },
    ];

    it("renders alert dialog with correct title and description", () => {
        render(<AlertPopup tasks={mockTasks} setTasks={mockSetTasks} />);

        expect(screen.getByTestId("alert-dialog-title")).toHaveTextContent(
            "Are you absolutely sure?"
        );
        expect(
            screen.getByTestId("alert-dialog-description")
        ).toHaveTextContent(
            "This action cannot be undone. This will permanently delete your completed tasks."
        );
    });

    it("renders cancel and continue buttons", () => {
        render(<AlertPopup tasks={mockTasks} setTasks={mockSetTasks} />);

        expect(screen.getByTestId("alert-dialog-cancel")).toHaveTextContent(
            "Cancel"
        );
        expect(screen.getByTestId("alert-dialog-action")).toHaveTextContent(
            "Continue"
        );
    });

    it("removes completed tasks when continue button is clicked", () => {
        render(<AlertPopup tasks={mockTasks} setTasks={mockSetTasks} />);

        const continueButton = screen.getByTestId("alert-dialog-action");
        fireEvent.click(continueButton);

        expect(mockSetTasks).toHaveBeenCalledWith([
            {
                id: 1,
                title: "Active Task",
                description: "Description 1",
                completed: false,
            },
            {
                id: 3,
                title: "Another Active Task",
                description: "Description 3",
                completed: false,
            },
        ]);
    });

    it("handles empty tasks array", () => {
        render(<AlertPopup tasks={[]} setTasks={mockSetTasks} />);

        const continueButton = screen.getByTestId("alert-dialog-action");
        fireEvent.click(continueButton);

        expect(mockSetTasks).toHaveBeenCalledWith([]);
    });

    it("handles tasks with no completed tasks", () => {
        const activeTasks: ITask[] = [
            {
                id: 1,
                title: "Active Task 1",
                description: "Description 1",
                completed: false,
            },
            {
                id: 2,
                title: "Active Task 2",
                description: "Description 2",
                completed: false,
            },
        ];

        render(<AlertPopup tasks={activeTasks} setTasks={mockSetTasks} />);

        const continueButton = screen.getByTestId("alert-dialog-action");
        fireEvent.click(continueButton);

        expect(mockSetTasks).toHaveBeenCalledWith(activeTasks);
    });
});

describe("DialogPopup Component", () => {
    const mockSetTasks = vi.fn();
    const user = userEvent.setup();

    beforeEach(() => {
        mockSetTasks.mockClear();
    });

    const mockTasks: ITask[] = [
        {
            id: 1,
            title: "Existing Task",
            description: "Description 1",
            completed: false,
        },
    ];

    it("renders dialog with correct title and description", () => {
        render(<DialogPopup tasks={mockTasks} setTasks={mockSetTasks} />);

        expect(screen.getByTestId("dialog-title")).toHaveTextContent(
            "Add todo"
        );
        expect(screen.getByTestId("dialog-description")).toHaveTextContent(
            "What's on your mind today?"
        );
    });

    it("renders form inputs with labels", () => {
        render(<DialogPopup tasks={mockTasks} setTasks={mockSetTasks} />);

        expect(screen.getByLabelText("Title")).toBeInTheDocument();
        expect(screen.getByLabelText("Description")).toBeInTheDocument();
    });

    it("renders cancel and save buttons", () => {
        render(<DialogPopup tasks={mockTasks} setTasks={mockSetTasks} />);

        const buttons = screen.getAllByTestId("button");
        expect(buttons).toHaveLength(2);
        expect(buttons[0]).toHaveTextContent("Cancel");
        expect(buttons[1]).toHaveTextContent("Save changes");
    });

    it("updates input values when user types", async () => {
        render(<DialogPopup tasks={mockTasks} setTasks={mockSetTasks} />);

        const titleInput = screen.getByLabelText("Title");
        const descriptionInput = screen.getByLabelText("Description");

        await user.type(titleInput, "New Task Title");
        await user.type(descriptionInput, "New Task Description");

        expect(titleInput).toHaveValue("New Task Title");
        expect(descriptionInput).toHaveValue("New Task Description");
    });

    it("creates new task with correct ID when save button is clicked", async () => {
        render(<DialogPopup tasks={mockTasks} setTasks={mockSetTasks} />);

        const titleInput = screen.getByLabelText("Title");
        const descriptionInput = screen.getByLabelText("Description");
        const saveButton = screen.getAllByTestId("button")[1];

        await user.type(titleInput, "New Task");
        await user.type(descriptionInput, "New Description");
        fireEvent.click(saveButton);

        expect(mockSetTasks).toHaveBeenCalledWith([
            {
                id: 1,
                title: "Existing Task",
                description: "Description 1",
                completed: false,
            },
            {
                id: 2,
                title: "New Task",
                description: "New Description",
                completed: false,
            },
        ]);
    });

    it("handles empty tasks array and creates task with ID 0", async () => {
        render(<DialogPopup tasks={[]} setTasks={mockSetTasks} />);

        const titleInput = screen.getByLabelText("Title");
        const descriptionInput = screen.getByLabelText("Description");
        const saveButton = screen.getAllByTestId("button")[1];

        await user.type(titleInput, "First Task");
        await user.type(descriptionInput, "First Description");
        fireEvent.click(saveButton);

        expect(mockSetTasks).toHaveBeenCalledWith([
            {
                id: 0,
                title: "First Task",
                description: "First Description",
                completed: false,
            },
        ]);
    });

    it("clears form inputs after saving", async () => {
        render(<DialogPopup tasks={mockTasks} setTasks={mockSetTasks} />);

        const titleInput = screen.getByLabelText("Title");
        const descriptionInput = screen.getByLabelText("Description");
        const saveButton = screen.getAllByTestId("button")[1];

        await user.type(titleInput, "New Task");
        await user.type(descriptionInput, "New Description");
        fireEvent.click(saveButton);

        expect(titleInput).toHaveValue("");
        expect(descriptionInput).toHaveValue("");
    });

    it("creates new task with empty inputs", async () => {
        render(<DialogPopup tasks={mockTasks} setTasks={mockSetTasks} />);

        const saveButton = screen.getAllByTestId("button")[1];
        fireEvent.click(saveButton);

        expect(mockSetTasks).toHaveBeenCalledWith([
            {
                id: 1,
                title: "Existing Task",
                description: "Description 1",
                completed: false,
            },
            { id: 2, title: "", description: "", completed: false },
        ]);
    });
});
