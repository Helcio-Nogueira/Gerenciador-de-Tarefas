import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";

function DetailsPage() {
  const [searchParams] = useSearchParams(); //Contém os parâmetros da URL
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-slate-500 p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-200"
          >
            <ChevronLeftIcon />
          </button>
        </div>
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Detalhes da Tarefa
        </h1>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl font-bold text-bg-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
