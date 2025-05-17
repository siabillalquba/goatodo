import { Button } from "./components/button";

const tasks = [
  {
    id: 1,
    title: "Breakfast",
    completed: true,
    date: new Date("2025-05-13 07:00"),
  },
  {
    id: 2,
    title: "Go to office",
    completed: false,
    date: new Date("2025-05-13 07:30"),
  },
];

export function App() {
  return (
    <div className="p-4">
      <h1 className="p-8 text-3xl">🐐 GOATODO</h1>

      <ul className="space-y-8">
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <h2>{task.title}</h2>
              <p>{task.completed ? "Completed" : "Incomplete"}</p>
              <p>Date Time: {task.date.toLocaleString()}</p>
              <Button>Delete</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
