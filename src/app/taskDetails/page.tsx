import { TaskInfoCard, TaskItem } from "@/components/TaskInfoCard";

const mockTask = {
  title: "Criar tela de detalhes",
  status: "Em progresso",
  items: ["Criar layout", "Adicionar lógica", "Escrever testes"],
};

export default function TaskDetails() {
  return (
    <div>
      <TaskInfoCard title={mockTask.title} status={mockTask.status} />
      <ul>
        {mockTask.items.map((item, index) => (
          <TaskItem key={index} label={item} />
        ))}
      </ul>
    </div>
  );
}
