import { Link } from "react-router";
import type { Task } from "../modules/task/type";
import { ButtonSmall } from "./button";
import { Checkbox } from "./ui/checkbox";

export function TaskCard({
  task,
  removeTask,
  completeTask,
}: {
  task: Task;
  removeTask?: (id: number) => void;
  completeTask?: (id: number) => void;
}) {
  return (
    <div key={task.id} className="max-w-sm rounded-lg border-2 bg-amber-50 p-4">
      <div className="flex gap-2 align-middle">
        {completeTask && (
          <Checkbox
            checked={task.completed}
            onCheckedChange={() => completeTask(task.id)}
          />
        )}
        {/* <Checkbox checked={task.completed} onCheckedChange={onToggle} /> */}

        <Link to={`/tasks/${task.id}`}>
          <h2 className="text-xl font-bold">{task.title}</h2>
        </Link>
      </div>

      <p>{task.completed ? "Completed" : "Incomplete"}</p>
      <p>Date Time: {task.date.toLocaleString()}</p>

      {removeTask && (
        <ButtonSmall onClick={() => removeTask(task.id)}>Delete</ButtonSmall>
      )}
    </div>
  );
}
