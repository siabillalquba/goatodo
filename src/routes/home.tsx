import { Button } from "../components/button";
import { TaskCard } from "../components/task-card";
import { useLocalStorage } from "@uidotdev/usehooks";
import type { Task } from "../modules/task/type";
import { initialTasks } from "../modules/task/data";

export function HomeRoute() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", initialTasks);

  function removeTask(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  function completeTask(id: number) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );

    setTasks(updatedTasks);
  }

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const title = String(formData.get("title"));

    const newTask = {
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      title: title,
      completed: false,
      date: new Date(),
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

    event.currentTarget.reset();
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-sm space-y-10 p-4">
        <header>
          <h1 className="flex justify-center text-3xl font-bold">🐐 GOATODO</h1>
          <p className="flex justify-center p-2">To Do List for GOAT</p>

          <form
            onSubmit={addTask}
            method="post"
            className="flex flex-col justify-center gap-2 rounded-lg border-2 bg-amber-50 p-4"
          >
            <label htmlFor="title">Task Title</label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Task title"
              className="border p-2"
            />
            <Button type="submit">Add Task</Button>
          </form>
        </header>

        <ul className="space-y-8">
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <TaskCard
                  task={task}
                  removeTask={removeTask}
                  completeTask={completeTask}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
