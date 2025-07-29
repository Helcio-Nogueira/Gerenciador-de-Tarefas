import { useState } from "react";
import Input from "./input.jsx";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da sua tarefa"
        // className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" //definido em input.jsx para não ficar repetitivo
        value={title}
        onChange={(event) => setTitle(event.target.value)} //setar o novo título
      />
      <Input
        type="text"
        placeholder="Digite descrição da sua tarefa"
        //className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" //definido em input.jsx para não ficar repetitivo
        value={description}
        onChange={(event) => setDescription(event.target.value)} //setar a nova descrição
      />
      <button
        onClick={() => {
          //verificar se o título e a descrição não estão vazios
          if (!title.trim() || !description.trim()) {
            return alert("O 'Título' e a 'Descrição' são obrigatórias");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
