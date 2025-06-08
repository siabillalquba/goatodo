import { useParams } from "react-router";

export function TaskDetailsRoute() {
  const params = useParams();

  return (
    <div>
      <h1>Task Details: {params.taskID}</h1>
    </div>
  );
}
