import { CheckIcon, ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    //navigate(`/details-task?title=${task.title}&description=${task.description}`); -- isso é substituído por:
    navigate(`/details-task?${query.toString()}`);
    //Isso vai redirecionar para a rota details-task, passando os parâmetros de título
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full flex gap-2 text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.isCompleted ? <CheckIcon /> : null}
            {task.title}
          </button>
          <button
            onClick={() => onSeeDetailsClick(task)}
            className=" bg-slate-400 text-white p-2 rounded-md"
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className={` bg-slate-400 text-white p-2 rounded-md `}
          >
            <Trash2Icon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
