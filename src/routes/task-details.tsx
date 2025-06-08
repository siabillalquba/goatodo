import { useLocalStorage } from "@uidotdev/usehooks";
import { useParams } from "react-router";
import { initialTasks } from "../modules/task/data";
import { TaskCard } from "../components/task-card";

export function TaskDetailsRoute() {
  const params = useParams();
  const taskId = Number(params.taskId);

  const [tasks] = useLocalStorage("tasks", initialTasks);

  const taskItem = tasks.find((task) => task.id == taskId);

  if (!taskItem) {
    return (
      <div>
        <h1>Task {taskId} not found</h1>
      </div>
    );
  }

  return (
    <div className="p-10">
      <TaskCard task={taskItem} />
    </div>
  );
}
