import { Link } from "react-router";
import type { Task } from "../modules/task/type";
import { ButtonSmall } from "./button";

export function TaskCard({
  task,
  removeTask,
}: {
  task: Task;
  removeTask: (id: number) => void;
}) {
  return (
    <div key={task.id} className="rounded-lg border-2 bg-amber-50 p-4">
      <Link to={`/tasks/${task.id}`}>
        <h2 className="text-xl font-bold">{task.title}</h2>
      </Link>

      <p>{task.completed ? "Completed" : "Incomplete"}</p>
      <p>Date Time: {task.date.toLocaleString()}</p>
      <ButtonSmall onClick={() => removeTask(task.id)}>Delete</ButtonSmall>
    </div>
  );
}
