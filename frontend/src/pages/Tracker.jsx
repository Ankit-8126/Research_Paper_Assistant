import { useState } from "react";
import "../styles/tracker.css";

function Tracker() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Collect research papers",
            description:
                "Find relevant papers for the research topic.",
            status: "Completed",
        },
        {
            id: 2,
            title: "Read selected papers",
            description:
                "Read and understand the important research studies.",
            status: "In Progress",
        },
        {
            id: 3,
            title: "Prepare literature review",
            description:
                "Compare findings and organize the literature review.",
            status: "Pending",
        },
        {
            id: 4,
            title: "Generate citations",
            description:
                "Prepare citations for all selected research papers.",
            status: "Pending",
        },
    ]);

    const [showForm, setShowForm] = useState(false);

    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
        status: "Pending",
    });

    const toggleTask = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id
                    ? {
                        ...task,
                        status:
                            task.status === "Completed"
                                ? "Pending"
                                : "Completed",
                    }
                    : task
            )
        );
    };

    const updateTaskStatus = (id, newStatus) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id
                    ? { ...task, status: newStatus }
                    : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks((prevTasks) =>
            prevTasks.filter((task) => task.id !== id)
        );
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setNewTask((prevTask) => ({
            ...prevTask,
            [name]: value,
        }));
    };

    const addTask = (e) => {
        e.preventDefault();

        if (!newTask.title.trim()) {
            return;
        }

        const task = {
            id: Date.now(),
            title: newTask.title.trim(),
            description:
                newTask.description.trim() ||
                "No description added.",
            status: newTask.status,
        };

        setTasks((prevTasks) => [...prevTasks, task]);

        setNewTask({
            title: "",
            description: "",
            status: "Pending",
        });

        setShowForm(false);
    };

    const completedTasks = tasks.filter(
        (task) => task.status === "Completed"
    ).length;

    const inProgressTasks = tasks.filter(
        (task) => task.status === "In Progress"
    ).length;

    const remainingTasks = tasks.filter(
        (task) => task.status !== "Completed"
    ).length;

    const progress =
        tasks.length === 0
            ? 0
            : Math.round((completedTasks / tasks.length) * 100);

    return (
        <main className="tracker-page">
            <div className="tracker-header">
                <div>
                    <span className="tracker-label">
                        RESEARCH TRACKER
                    </span>

                    <h1>Track Your Research Progress</h1>

                    <p>
                        Organize your research tasks and keep track
                        of important milestones.
                    </p>
                </div>

                <div className="progress-circle">
                    <strong>{progress}%</strong>
                    <span>Complete</span>
                </div>
            </div>

            <section className="tracker-overview">
                <div className="tracker-stat">
                    <span>📋</span>
                    <strong>{tasks.length}</strong>
                    <p>Total Tasks</p>
                </div>

                <div className="tracker-stat">
                    <span>✅</span>
                    <strong>{completedTasks}</strong>
                    <p>Completed</p>
                </div>

                <div className="tracker-stat">
                    <span>🔄</span>
                    <strong>{inProgressTasks}</strong>
                    <p>In Progress</p>
                </div>

                <div className="tracker-stat">
                    <span>⏳</span>
                    <strong>{remainingTasks}</strong>
                    <p>Remaining</p>
                </div>
            </section>

            <section className="tracker-section">
                <div className="tracker-section-heading">
                    <div>
                        <h2>Research Tasks</h2>

                        <p>
                            Complete tasks as you progress through
                            your research.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="add-task-button"
                        onClick={() => setShowForm(!showForm)}
                    >
                        {showForm ? "Cancel" : "+ Add Task"}
                    </button>
                </div>

                {showForm && (
                    <form
                        className="add-task-form"
                        onSubmit={addTask}
                    >
                        <div className="form-field">
                            <label htmlFor="taskTitle">
                                Task Title
                            </label>

                            <input
                                id="taskTitle"
                                name="title"
                                type="text"
                                placeholder="e.g. Analyze research findings"
                                value={newTask.title}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="taskDescription">
                                Description
                            </label>

                            <textarea
                                id="taskDescription"
                                name="description"
                                placeholder="Describe what needs to be done..."
                                value={newTask.description}
                                onChange={handleInputChange}
                                rows="3"
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="taskStatus">
                                Status
                            </label>

                            <select
                                id="taskStatus"
                                name="status"
                                value={newTask.status}
                                onChange={handleInputChange}
                            >
                                <option value="Pending">
                                    Pending
                                </option>

                                <option value="In Progress">
                                    In Progress
                                </option>

                                <option value="Completed">
                                    Completed
                                </option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="save-task-button"
                        >
                            Add Task
                        </button>
                    </form>
                )}

                <div className="task-list">
                    {tasks.length > 0 ? (
                        tasks.map((task) => (
                            <article
                                key={task.id}
                                className={`task-card ${task.status === "Completed"
                                        ? "task-completed"
                                        : ""
                                    }`}
                            >
                                <button
                                    type="button"
                                    className="task-checkbox"
                                    onClick={() =>
                                        toggleTask(task.id)
                                    }
                                    aria-label={`Mark ${task.title} as ${task.status === "Completed"
                                            ? "pending"
                                            : "completed"
                                        }`}
                                >
                                    {task.status === "Completed"
                                        ? "✓"
                                        : ""}
                                </button>

                                <div className="task-content">
                                    <div className="task-title-row">
                                        <h3>{task.title}</h3>

                                        <span
                                            className={`task-status status-${task.status
                                                .toLowerCase()
                                                .replace(" ", "-")}`}
                                        >
                                            {task.status}
                                        </span>
                                    </div>

                                    <p>{task.description}</p>

                                    <div className="task-actions">
                                        <select
                                            value={task.status}
                                            onChange={(e) =>
                                                updateTaskStatus(
                                                    task.id,
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="Pending">
                                                Pending
                                            </option>

                                            <option value="In Progress">
                                                In Progress
                                            </option>

                                            <option value="Completed">
                                                Completed
                                            </option>
                                        </select>

                                        <button
                                            type="button"
                                            className="delete-task-button"
                                            onClick={() =>
                                                deleteTask(task.id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="tracker-empty">
                            <div>📋</div>

                            <h3>No research tasks</h3>

                            <p>
                                Add your first task to start tracking
                                your research progress.
                            </p>

                            <button
                                type="button"
                                className="add-task-button"
                                onClick={() => setShowForm(true)}
                            >
                                + Add Task
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}

export default Tracker;