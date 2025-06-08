import { useState } from "react";
import { Button } from "./components/button";
import type { Task } from "./modules/task/type";
import { TaskCard } from "./components/task-card";

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Breakfast",
    completed: true,
    date: new Date("2025-05-18 07:00"),
  },
  {
    id: 2,
    title: "Go to office",
    completed: false,
    date: new Date("2025-05-18 07:30"),
  },
  {
    id: 3,
    title: "Work",
    completed: true,
    date: new Date("2025-05-18 08:00"),
  },
  {
    id: 4,
    title: "Lunch",
    completed: false,
    date: new Date("2025-05-18 12:00"),
  },
  {
    id: 5,
    title: "Continue work",
    completed: true,
    date: new Date("2025-05-18 13:00"),
  },
  {
    id: 6,
    title: "Go to home",
    completed: false,
    date: new Date("2025-05-18 17:00"),
  },
  {
    id: 7,
    title: "Relax n chill",
    completed: false,
    date: new Date("2025-05-18 18:00"),
  },
  {
    id: 8,
    title: "Learning",
    completed: false,
    date: new Date("2025-05-18 20:00"),
  },
  {
    id: 9,
    title: "Sleep",
    completed: false,
    date: new Date("2025-05-18 23:00"),
  },
];

export function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function removeTask(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const title = String(formData.get("title"));

    //  if (!title) return null;

    const newTask = {
      id: tasks[tasks.length - 1].id + 1,
      title: title,
      completed: false,
      date: new Date(),
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  }

  return (
    <div className="flex justify-center">
      <div className="space-y-10 p-4">
        <header>
          <h1 className="flex justify-center text-3xl font-bold underline">
            🐐 GOATODO
          </h1>
          <p className="flex justify-center p-2">To Do List for GOAT</p>

          <form onSubmit={addTask} method="post">
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
                <TaskCard task={task} removeTask={removeTask} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
