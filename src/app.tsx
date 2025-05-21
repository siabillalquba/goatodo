import { Button } from "./components/button";

const tasks = [
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
  return (
    <div className="flex justify-center bg-amber-800">
      <div className="p-4">
        <header>
          <h1 className="text-3xl font-bold underline flex justify-center">
            🐐 GOATODO
          </h1>
          <p className="p-2 flex justify-center">To Do List for GOAT</p>
        </header>

        <ul className="space-y-8">
          {tasks.map((task) => {
            return (
              <li key={task.id} className="border p-4 rounded-lg bg-amber-50">
                <h2 className="font-bold">{task.title}</h2>
                <p>{task.completed ? "Completed" : "Incomplete"}</p>
                <p>Date Time: {task.date.toLocaleString()}</p>
                <Button>Delete</Button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
